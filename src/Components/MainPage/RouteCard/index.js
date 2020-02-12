import React from 'react';
import Card from '../../Commons/Card/Card';
import { Title } from './styles';

const RouteCard = (props) => {
    return(
        <Card>
            <Title>{props.title}</Title>
        </Card>
    )
}

export default RouteCard;