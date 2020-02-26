import React, {useEffect, useState} from 'react';
import {ListContainer, MainContainer, MapContainer} from './styles';
import ListCard from "./ListCard";
import API from "../../Services/API";
import MapComponent from './Map';

//TODO Need fulton to approve or use stateVariables
let routeID = "";
let tripsWithRoutes
const MainPage = () => {

    //TODO ask how to get rid of let
    let getTripsWithRoutes = async (routeId) => {
        tripsWithRoutes = await API.getInfoByRoute(routeId);
        console.log("GETINFOBYROUTES",tripsWithRoutes);
    };


    function passRoute(newRouteID){
        routeID = newRouteID;
        console.log("Main page now has a new RouteID", routeID);
        getTripsWithRoutes(newRouteID);
    }

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
                <MapComponent
                    trips={tripsWithRoutes}
                />
            </MapContainer>
            <ListContainer>
                <ListCard title={"Routes"} routes={routes} passRouteId={passRoute}/>
                {/* <RouteCard title={"Trips"}/> */}
            </ListContainer>
        </MainContainer>
    )
};

export default MainPage;