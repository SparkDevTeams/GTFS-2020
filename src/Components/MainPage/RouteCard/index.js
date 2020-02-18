import React, { useEffect, useState } from 'react';
import Card from '../../Commons/Card/Card';
import { Title } from './styles';
import API from '../../../Services/API';

const RouteCard = (props) => {

  const handleRouteClick = async (item) => {
    let res = await API.getInfoByRoute(item.route_id);
    console.log(res);
  }

  return (
    <>
      <Title>{props.title}</Title>
      {props.routes.map((item, i) => <Card height="10%" margin="5px" key={i} onClick={() => handleRouteClick(item)}>{item.route_long_name}</Card>)}
    </>
  )
}

export default RouteCard;