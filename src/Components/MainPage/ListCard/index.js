import React from 'react';
import {Title} from './styles';
import RouteCard from "../RouteCard";

let passedRouteId = null;

function getRouteID(routeID) {
    passedRouteId = routeID;
    console.log("THE ID PASSED SUCCESSFULLY to ListCard", passedRouteId);
}

const ListCard = (props) => {
    return (
        <>
            {/* Displays Routes */}
            <Title>{this.props.title}</Title>

            <RouteCard Routes={this.props.routes} callBack={getRouteID}/>
            {/*  TODO add trips - don't know how :D*/}
        </>
    )
};

export default ListCard;