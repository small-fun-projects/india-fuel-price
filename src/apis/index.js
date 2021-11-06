import axios from "axios";

const APIS = {
  STATE_LIST:
    "https://mfapps.indiatimes.com/ET_Calculators/citystate.htm?type=state",
  FUEL_PRICES_BY_STATE:
    "https://mfapps.indiatimes.com/ET_Calculators/oilprice.htm",
};

const fuelApis = {
  getStateDropdown: async () => {
    return await axios
      .get(APIS.STATE_LIST)
      .then((res) => {
        return res.data?.results;
      })
      .catch((err) => err.message);
  },
  getPricesByState: async (state) => {
    return await axios
      .get(APIS.FUEL_PRICES_BY_STATE, {
        params: {
          citystate: state,
        },
      })
      .then((res) => {
        return res.data?.results;
      })
      .catch((err) => err.message);
  },
};
export default fuelApis;
