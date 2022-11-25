/*
Easy use AWS helper functions
*/

package CUSTOM_GO_MODULE

import (
	
	"context"

	. "github.com/acedev0/GOGO_Gadgets/a"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"    
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"     

)

var dynamo_svc *dynamodb.Client
var DYNAMO_TABLE = ""

var MAX_TABLES_to_LIST = 300

func Dynamo_INIT() {

    // Using the Config value, create the DynamoDB client
    dynamo_svc = dynamodb.NewFromConfig(AWS_CONF)

}


func DYN_Insert(item interface{})  {

	data, err := attributevalue.MarshalMap(item)

	if err != nil {
        R.Println("DYN_Insert, error during MARSHELING!!", err)
        return
	}

	_, err = dynamo_svc.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String(DYNAMO_TABLE),
		Item:      data,
	})

	if err != nil {
		R.Print("DYN_Insert error: ")
		Y.Print(AWS_PROFILE)
		C.Println(" ", DYNAMO_TABLE)
        R.Println("error after INSERT: ", err)
        return
	}  
}



func SHOW_Tables() []string {
    C.Println(" SHOW_Tables in: ", AWS_PROFILE)
	C.Println("")

    // Build the request with its input parameters
    resp, err := dynamo_svc.ListTables(context.TODO(), &dynamodb.ListTablesInput{
        Limit: aws.Int32(MAX_TABLES_to_LIST),
    })
    if err != nil {
        R.Print(" Cant List Tables: ")
        Y.Println(err)        
    }

	var TMP_TABLE_LIST []string  

    for _, tableName := range resp.TableNames {
        C.Println(tableName)
        TMP_TABLE_LIST = append(TMP_TABLE_LIST, tableName)
    }

	return TMP_TABLE_LIST
}



/*
        var tslack SlackWorkspace

        tslack.ID = sl.keyID
        tslack.Key = sl.keyID
        tslack.Web_url = sl.SLACK_URL
        tslack.Name = P.Team_name

        s := strings.Split(sl.OwnersCSV, ",")

        for _, ow := range s {
            tslack.Owners = append(tslack.Owners, ow)
        }

        all := []interface{}{tslack}

// Note.. these structs are defined here for GO's benefit! dynamodb only cares about what has the dynamodbav attribute attached to it!
type  TEAMS_REC_OBJ struct {
	Team_stub            string              `dynamodbav:"team_stub"` //`dynamodbav:"teamname,omitempty" json:"teamname,omitempty"`
	Date_created         interface{}         `dynamodbav:"date_created"`
	Date_updated       string                `dynamodbav:"date_updated"`		                      
	Team_description            string       `dynamodbav:"team_description"` //`dynamodbav:"teamname,omitempty" json:"teamname,omitempty"`	

	Team_members            []string         `dynamodbav:"team_members"` //`dynamodbav:"teamname,omitempty" json:"teamname,omitempty"`

	Team_name            string              `dynamodbav:"team_name"` //`dynamodbav:"teamname,omitempty" json:"teamname,omitempty"`
	Team_owners            []string          `dynamodbav:"team_owners"` //`dynamodbav:"teamname,omitempty" json:"teamname,omitempty"`

	
	Primary_business            string       `dynamodbav:"primary_business"` //`dynamodbav:"teamname,omitempty" json:"teamname,omitempty"`


	ResourcesConfluence interface{} 	`dynamodbav:"resources_confluence,omitempty"`
	ResourcesGitlab     interface{}     `dynamodbav:"resources_gitlab,omitempty"`
	ResourcesJira       interface{}     `dynamodbav:"resources_jira,omitempty"`
	ResourcesSlack      interface{}     `dynamodbav:"resources_slack,omitempty"`	
	
	
}


type ResourcesSlack struct {
	SlackWorkspaces []SlackWorkspace `dynamodbav:"slackworkspaces,omitempty"`
}

type SlackWorkspace struct {
	ID     string   `dynamodbav:"id"`	
	Key    string   `dynamodbav:"key"`
	Name   string   `dynamodbav:"name"`	
	Owners []string `dynamodbav:"owners"`
	Web_url string   `dynamodbav:"web_url"`
}

*/


func SHOW_Table_Contents() {

    C.Print("**| SHOW_Table_Contents: ")
    Y.Println(DYNDB_TABLE)
    tmpRESULT, err := dynamo_svc.Scan(context.TODO(), &dynamodb.ScanInput{
        TableName:        aws.String(DYNAMO_TABLE),

    })
    if err != nil {
        R.Println("Error Showing Table")
        Y.Println(err)
        return
    }

	/*
mapOfSlices := map[string][]string{
    "first": {},
    "second": []string{"one", "two", "three", "four", "five"},
    "third": []string{"quarter", "half"},
}
	*/

	results := make(map[string][]string)

    // loads table contents into QUEUED_TABLE_DATA_DATA
    tmperr := attributevalue.UnmarshalListOfMaps(tmpRESULT.Items, &results)
    if tmperr != nil {
        R.Println("ERROR")
        Y.Println(tmperr)
		return
    }



    for n, tmp := range results {

        M.Print(" Queuing: ")
        Y.Println(tmp)


    }
    
}