import React, {useEffect, useState} from 'react';
import {Title} from './styles';
import RouteCard from "../RouteCard";

let passedRouteId = null;

const ListCard = (props) => {

    //TODO This needs to get implemented
    // const [trips, setTrips] = useState("NoTRIPS");
    const [routes, setRoutes] = useState("NoROUTES");

    function getRouteID(routeID) {
        passedRouteId = routeID;
        setRoutes(routeID);
        console.log("THE ID PASSED SUCCESSFULLY to ListCard", passedRouteId);
        console.log("routes State var is now ", routes);
        props.passRouteId(routeID);
    }

    useEffect(
        () => {
            console.log("ListCard reloaded with routes being", routes);
        },
        [routes],
    );
    //Got discontinued
    // useEffect(
    //     () => {
    //         const subscription = props.source.subscribe();
    //         return () => {
    //             subscription.unsubscribe();
    //         };
    //     },
    //     [props.source],
    // );
    
    return (
        <>
            {/* Displays Routes */}
            <Title>{props.title}</Title>

            <RouteCard Routes={props.routes} callBack={getRouteID}/>
            {/*  TODO add trips - don't know how :D*/}
        </>
    )
};

export default ListCard;