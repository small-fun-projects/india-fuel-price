import axios from 'axios';

const APIS = {
    STATE_LIST: 'https://mfapps.indiatimes.com/ET_Calculators/citystate.htm?type=state'
}

const fuelApis = {

    getStateDropdown: async () => {
        return await axios.get(APIS.STATE_LIST).then(res => {
            console.log(res);
            return res.data?.results;
        }).catch(err => err.message);
    }
}
export default fuelApis;