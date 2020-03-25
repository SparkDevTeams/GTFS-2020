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
    },
    getStopsByRoute: async function (routeId) {
        let response = await axios.get(`${URL}/stops/find?id=${routeId}`);
        return response.data;
    },
    registerUser: async function (username, password, email) {
        let response = await axios.get(`${URL}/register?user=${username}&pwd=${password}&${email}`);
        return response.data;
    }
};

export default API;

