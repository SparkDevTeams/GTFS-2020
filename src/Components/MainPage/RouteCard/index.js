import React from 'react';
import Card from '../../Commons/Card/Card';
import { Title } from './styles';

const RouteCard = (props) => {


    return(
        <Card>
            <Title>{props.title}</Title>

            <ul>
                {
                    props.Routes.map(function (item, i) {
                    console.log('test');
                    return <li key={i}>{item.route_long_name}</li>
                    })
                }
            </ul>

        </Card>
    )
}

export default RouteCard;