import React, { useEffect, useState } from 'react';
import { MainContainer, MapContainer, ListContainer } from './styles';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import RouteCard from "../MainPage/RouteCard";
import API from "../../Services/API";

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
        <LeafletMap center={[25.7601, -80.3744]} zoom={18}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={[25.7601, -80.3744]}>
            <Popup>
              <div>
                <h2>FIU Parking Garage 6</h2>
              </div>
            </Popup>
          </Marker>
        </LeafletMap>
      </MapContainer>
      <ListContainer>
        <RouteCard title={"Routes"} routes={routes}/>
        {/* <RouteCard title={"Trips"}/> */}
      </ListContainer>
    </MainContainer>
  )
};

export default MainPage;