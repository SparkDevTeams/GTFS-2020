import React, { useEffect, useState } from 'react';
import Card from '../../Commons/Card/Card';
import { Title } from './styles';
import RouteCard from "../RouteCard";



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

          <RouteCard Routes={this.props.routes} />
        </>
    )
  }
}

export default ListCard;