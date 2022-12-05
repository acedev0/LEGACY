export default class TerryHandler {

    getMaxarData() {
        return fetch('demo/data/MaxMetric_data.json').then(res => res.json())
                .then(d => d.data);
    }

}
