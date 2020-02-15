import React, {useEffect, useState} from 'react';
import Card from '../../Commons/Card/Card';
import { Title } from './styles';

const RouteCard = (props) => {

    const test = [{"route_id": "16891", "agency_id": "", "route_short_name": "MIAHLT", "route_long_name": "City of Miami Trolley (Health Dist)", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "0080FF", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "18110", "agency_id": "", "route_short_name": "MIASPG", "route_long_name": "City of Miami Springs Free-Bee", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "FF0000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "21866", "agency_id": "", "route_short_name": "286", "route_long_name": "NORTH POINTE CIRCULATOR", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "800080", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "18109", "agency_id": "", "route_short_name": "SURSID", "route_long_name": "Town of Sufside Shuttle", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "FF8000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "19935", "agency_id": "", "route_short_name": "MB-SBL", "route_long_name": "City of Miami Bch Trolley - SoBeach", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "FF0000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "21865", "agency_id": "", "route_short_name": "277", "route_long_name": "7 AVE MAX", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "000000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "16895", "agency_id": "", "route_short_name": "DLOOP1", "route_long_name": "City of Doral Trolley (Rt. 1)", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "FF0000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "18787", "agency_id": "", "route_short_name": "MB-MID", "route_long_name": "City of Miami Bch Trolley - MidBeac", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "008080", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "18112", "agency_id": "", "route_short_name": "NMBLIN", "route_long_name": "City of North Miami Beach B-Line", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "FF0000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "21875", "agency_id": "", "route_short_name": "344", "route_long_name": "MDC HOMESTEAD TO FLA CITY", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "FF8000", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "18108", "agency_id": "", "route_short_name": "BYHBIS", "route_long_name": "Bay Harbor Islands Shuttle", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "008080", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "21853", "agency_id": "", "route_short_name": "208", "route_long_name": "LITTLE HAVANA CONNECTION", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "000080", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "21871", "agency_id": "", "route_short_name": "297", "route_long_name": "27 AVE ORANGE MAX", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "A0A0A4", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "21864", "agency_id": "", "route_short_name": "272", "route_long_name": "SUNSET KAT", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "0000FF", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "18111", "agency_id": "", "route_short_name": "WESMIA", "route_long_name": "City of West Miami Shuttle", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "0000FF", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "16903", "agency_id": "", "route_short_name": "HIAMAR", "route_long_name": "City of Hialeah Transit (Marlin)", "route_desc": "", "route_type": 3, "route_url": "", "route_color": "0080C0", "route_text_color": "FFFFFF", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "14457", "agency_id": "", "route_short_name": "MMI", "route_long_name": "METROMOVER INNER LOOP", "route_desc": "", "route_type": 0, "route_url": "", "route_color": "FF8000", "route_text_color": "000000", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}, {"route_id": "14456", "agency_id": "", "route_short_name": "MMO", "route_long_name": "METROMOVER OMNI/BRICKELL OUTER LOOP", "route_desc": "", "route_type": 0, "route_url": "", "route_color": "008000", "route_text_color": "000000", "agency_key": "mdc-gtfs", "created_at": {"$date": 1580139533516}}]

    useEffect(() => {
        console.log("PROPS", props.routes);
    }, [props])

    return(
        <Card>
            <Title>{props.title}</Title>

            <ul>
                {
                    
                    props.routes.map(function (item, i)
                    {
                        console.log(item);
                        return <li key={i}>{item.route_long_name}</li>
                    })
                }
            </ul>

        </Card>
    )
}

export default RouteCard;