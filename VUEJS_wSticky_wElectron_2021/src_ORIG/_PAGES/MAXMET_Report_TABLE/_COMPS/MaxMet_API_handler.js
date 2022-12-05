

const API_URL = "http://localhost:8888/all"
const STATUS_URL = "http://localhost:8888/status"


export default class MaxMet_API_handler {



    getMaxMet_RESTAPI() {        

        return fetch(API_URL).then(res => res.json())
                .then(JSON_RESP_OBJ => JSON_RESP_OBJ);
    }

    
    CHECK_BOOT_STATUS() {
        return fetch(STATUS_URL).then(res => res.json())
                .then(JSON_RESP_OBJ => JSON_RESP_OBJ);
    }        

}
