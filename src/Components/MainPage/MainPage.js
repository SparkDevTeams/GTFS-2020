import React, { useEffect, useState } from 'react';
import { MainContainer, MapContainer, ListContainer } from './styles';
import RouteCard from "../MainPage/RouteCard";
import API from "../../Services/API";
import MapComponent from './Map';

const MainPage = () => {

  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await API.getRoutes();
      setRoutes(res);
    }

    fetchData();
  }, []);


  return (
    <MainContainer>
      <MapContainer>
        <MapComponent/>
      </MapContainer>
      <ListContainer>
        <RouteCard title={"Routes"} routes={routes}/>
        {/* <RouteCard title={"Trips"}/> */}
      </ListContainer>
    </MainContainer>
  )
};

export default MainPage;