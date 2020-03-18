import React from 'react';
import {Title, Container} from './styles';
import RouteCard from "../RouteCard";

const ListCard = (props) => {

    function getRouteID(routeID) {
        props.passRouteId(routeID);
    }
    
    return (
        <Container>
            {/* Displays Routes */}
            <Title>{props.title}</Title>

            <select value={props.currentToken} onChange={(e) => props.setCurrentToken(e.currentTarget.value)}>
                {Object.entries(props.tokens).map((token, idx) =>  <option key={idx} value={token[1]}>{token[0]}</option>)}
            </select>
            <RouteCard Routes={props.routes} callBack={getRouteID}/>
            {/*  TODO add trips - don't know how :D*/}
        </Container>
    )
};

export default ListCard;