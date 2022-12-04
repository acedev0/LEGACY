/*
Easy use AWS helper functions
*/

package CUSTOM_GO_MODULE

import (
	"github.com/aws/aws-sdk-go-v2/aws"

    "context"

    . "github.com/acedev0/GOGO_Gadgets/a"

	"github.com/aws/aws-sdk-go-v2/service/s3"
	//"github.com/aws/aws-sdk-go-v2/service/s3/types"

)

var s3client  *s3.Client


func DISABLED_tmp_SHOW_BUCKET_CONTENTS(buckname string) {
    // Create an Amazon S3 service client
    //client := s3.NewFromConfig(cfg)

    // Get the first page of results for ListObjectsV2 for a bucket
    output, err := s3client.ListObjectsV2(context.TODO(), &s3.ListObjectsV2Input{
        Bucket: aws.String(buckname),
    })
    if err != nil {
        R.Println("Error in SHOW BUck COntents: ", err)
        return
    }

    C.Print("\nShowing Bucket Contents for: ")
    Y.Println(buckname)
    C.Println("")

    for _, object := range output.Contents {

        C.Print(aws.ToString(object.Key))
        Y.Println(" ", object.Size)

    }

}

func DISABLED_tmp_LIST_BUCKETS(ALL_PARAMS ...string){

    C.Println("\n ==| Listing S3 Buckets:")
    C.Println("")
    var showflag = false
    // var BUCK_LIST []string
    // var BUCK_LIST_OBJ string

	//2. Now, see if version was passed
	for x, VAL := range ALL_PARAMS {
		if x == 0 {
			if VAL == "show" {
				showflag = true
				continue
			}
        }
    } //end of params for

    listBucketsResult, err := s3client.ListBuckets(context.TODO(), &s3.ListBucketsInput{})
    if err != nil {
        R.Println(" Error in LIST_BUCKETS: ", err)
        return
    }

    for _, bucket := range listBucketsResult.Buckets {
        C.Print("    Bucket: ")
        Y.Print(*bucket.Name + " ")
        W.Println(bucket.CreationDate)

	}



    if showflag {

    }


    
}




func DISABLED_tmp_S3_INIT() {
    C.Println(" **| S3_INIT")
    s3client = s3.NewFromConfig(AWS_CONF_SESS)

    
}