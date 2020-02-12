import React from 'react';
import Card from '../../Commons/Card/Card';
import { PetImage, PetDescription, FunFactListItem } from './styles';

const RouteCard = (props) => {
    return(
        <Card>
            <h1>{props.title}</h1>
        </Card>
    )
}

export default RouteCard;