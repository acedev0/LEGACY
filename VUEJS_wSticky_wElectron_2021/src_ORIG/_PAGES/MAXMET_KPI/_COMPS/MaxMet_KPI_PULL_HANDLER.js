

const API_URL = "http://localhost:8888/kpi"


export default class MaxMet_KPI_PULL_HANDLER {

    getMaxMet_REST_for_KPI() {
        return fetch(API_URL).then(res => res.json())
                .then(JSON_RESP_OBJ => JSON_RESP_OBJ);
    }

}
