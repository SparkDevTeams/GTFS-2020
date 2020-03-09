const axios = require('axios');
const URL = "https://gtfs-mdc.herokuapp.com/";
const URLGetAllRoutes = "https://gtfs-mdc.herokuapp.com/routes/find/all?token=";

const API = {
    getStatus: async function () {
        await axios.get(URL)
            .then(function (response) {
                // handle success
                // console.log(response);
                console.warn("Status of backend: " + JSON.stringify(response.data));
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },
    getRoutes: async function (token) {
        let response = await axios.get(`${URLGetAllRoutes}${token}`);
        return response.data;
    },
    getInfoByRoute: async (id) => {
        try {
            let response = await axios.get(`https://gtfs-mdc.herokuapp.com/getIDs?id=${id}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    getTokens : async () => {
        let response = await axios.get('https://gtfs-mdc.herokuapp.com/tokens');
        return response.data;
    }
};

export default API;

