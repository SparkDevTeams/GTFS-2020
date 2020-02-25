import React from 'react';
import {Title} from './styles';
import RouteCard from "../RouteCard";

let passedRouteId = null;

function getRouteID(routeID) {
    passedRouteId = routeID;
    console.log("THE ID PASSED SUCCESSFULLY to ListCard", passedRouteId);
}

const ListCard = ({title, routes}) => {
    return (
        <>
            {/* Displays Routes */}
            <Title>{title}</Title>

            <RouteCard Routes={routes} callBack={getRouteID}/>
            {/*  TODO add trips - don't know how :D*/}
        </>
    )
};

export default ListCard;