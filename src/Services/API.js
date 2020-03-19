const axios = require('axios');
const URL = "https://gtfs-mdc.herokuapp.com";

const API = {
    getRoutes: async function (token) {
        let response = await axios.get(`${URL}/routes/find/all?token=${token}`);
        return response.data;
    },
    getTokens : async () => {
        let response = await axios.get(`${URL}/tokens`);
        return response.data;
    },
    getShapeByRoute: async function (token, routeId) {
        let response = await axios.get(`${URL}/shapes/find?token=${token}&id=${routeId}`);
        return response.data;
    }
};

export default API;

