import React, { useEffect, useState } from 'react';
import Card from '../../Commons/Card/Card';
import { Title } from './styles';
import API from '../../../Services/API';


const handleRouteClick = async (item) => {
  let res = await API.getInfoByRoute(item.route_id);
  console.log(res);
}

class ListCard extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <>
          <Title>{this.props.title}</Title>
          {
            this.props.routes.map(
                (item, i) =>
                    //Display Routes
                    <Card height="10%" margin="5px" key={i} onClick={() => handleRouteClick(item)}>{item.route_long_name}</Card>
            )
          }
        </>
    )
  }
}

export default ListCard;