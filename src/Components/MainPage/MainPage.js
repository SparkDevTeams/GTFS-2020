import React, {useEffect, useState} from 'react';
import {ListContainer, MainContainer, MapContainer} from './styles';
import ListCard from "./ListCard";
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
                <ListCard title={"Routes"} routes={routes}/>
                {/* <RouteCard title={"Trips"}/> */}
            </ListContainer>
        </MainContainer>
    )
};

export default MainPage;