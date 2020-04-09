const axios = require("axios");
const URL = "https://gtfs-mdc.herokuapp.com";

const API = {
  getRoutes: async function (token) {
    let response = await axios.get(`${URL}/routes/find/all?token=${token}`);
    return response.data;
  },
  getTokens: async () => {
    let response = await axios.get(`${URL}/tokens`);
    return response.data;
  },
  getShapeByRoute: async function (token, routeId) {
    let response = await axios.get(
      `${URL}/shapes/find?token=${token}&id=${routeId}`
    );
    return response.data;
  },
  getStopsByRoute: async function (routeId) {
    let response = await axios.get(`${URL}/stops/find?id=${routeId}`);
    return response.data;
  },
  registerUser: async function (username, password, email) {
    try {
      let response = await axios.post(`${URL}/register`, {
        user: username,
        pwd: password,
        email,
      });
      return response.data;
    } catch (e) {
      const { status } = e.response;
      if (status === 406) {
        return { message: "Account already in use" };
      }
      if (status === 500) {
        return { message: "There was an Error creating your account" };
      }
      return { message: "There was an Error creating your account" };
    }
  },
  getStations: async function () {
    try {
      let response = await axios.get(`${URL}/stations`);
      return response.data;
    } catch (e) {
      return { message: "There was an error getting the stations" };
    }
  },
  getTrainSchedule: async function (arrival, departure, date) {
    try {
      let response = await axios.get(
        `${URL}/trains/find?arrival=${arrival}&departure=${departure}&departure%20date=${date}`
      );
      return response.data;
    } catch (e) {
      return { message: "There was an error getting your schedule" };
    }
  },
  getAllTrirail: async function () {
    try {
      let response = await axios.get(`${URL}/trirail/find/all`);
      return response.data;
    } catch (e) {
      return { message: "There was an error getting the trirails" };
    }
  },
  getTrirailShape: async function (id) {
    try {
      let response = await axios.get(`${URL}/trishape/find?id=${id}`);
      return response.data;
    } catch (e) {
      return { message: "There was an error getting the trirails shape" };
    }
  },
  LoginUser: async function (username, password) {
    try {
      let base64encoded = btoa(`${username}:${password}`);
      let response = await axios.get(`${URL}/login`, {headers: {Authorization: `Basic ${base64encoded}`}});
      return response.data;
    } catch (e) {
      switch (e?.response?.status) {
        case 404:
          return { message: e.response.data.Error };
        default:
          return { message: "There was an error login in" };
      }
    }
  },
  getUserInfo: async function (username) {
    try {
      let response = await axios.get(`${URL}/profile?user=${username}`);
      return response.data;
    } catch (e) {
      return { message: 'There was an error getting the user profile'};
    }
  }
};

export default API;
