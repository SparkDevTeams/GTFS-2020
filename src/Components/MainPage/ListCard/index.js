import React, { useEffect, useState } from 'react';
import { Title } from './styles';
import RouteCard from "../RouteCard";
import API from "../../../Services/API";

let passedRouteId = null;

function getRouteID(routeID){
  passedRouteId = routeID;
    console.log("THE ID PASSED SUCCESSFULLY", passedRouteId);
}

class ListCard extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <>
          {/* Displays Routes */}
          <Title>{this.props.title}</Title>

          <RouteCard Routes={this.props.routes} callBack={getRouteID}/>
        </>
    )
  }
}

export default ListCard;