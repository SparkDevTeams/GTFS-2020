import React, { useEffect, useState } from 'react';
import { ListContainer, MainContainer, MapContainer } from './styles';
import ListCard from "./ListCard";
import API from "../../Services/API";
import MapComponent from './Map';

const MainPage = () => {

    const [routeID, setRouteId] = useState("");
    const [routes, setRoutes] = useState([]);
    const [tripsWithRoutes, setTripsWithRoutes] = useState({});
    const [tokens, setTokens] = useState([]);
    const [currentToken, setCurrentToken] = useState('');

    useEffect(() => {
        async function fetchData() {
            let apiTokens = await API.getTokens();
            setTokens(apiTokens);
            setCurrentToken(apiTokens[0]);
        }

        fetchData();
    }, []);

    useEffect(() => {
        async function fetchRoutes() {
            let apiRoutes = await API.getRoutes(currentToken);
            setRoutes(apiRoutes);
        }

        fetchRoutes();
    }, [currentToken]);

    // useEffect(() => {
    //     async function getTripsWithRoutes() {
    //         let trips = await API.getInfoByRoute(routeID);
    //         setTripsWithRoutes(trips);
    //     };

    //     getTripsWithRoutes();
    // }, [routeID]);


    return (
        <MainContainer>
            <MapContainer>
                <MapComponent
                    trips={tripsWithRoutes}
                />
            </MapContainer>
            <ListContainer>
                <ListCard title={"Routes"} routes={routes} passRouteId={setRouteId} setCurrentToken={setCurrentToken} tokens={tokens}/>
                {/* <RouteCard title={"Trips"}/> */}
            </ListContainer>
        </MainContainer>
    )
};

export default MainPage;