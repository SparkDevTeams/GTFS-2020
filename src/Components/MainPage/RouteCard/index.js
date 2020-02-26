import React, {useEffect, useState} from 'react';
import Card from "../../Commons/Card/Card";
import API from "../../../Services/API";


class RouteCard extends React.Component {



    handleRouteClick = async (item) => {
        this.props.callBack(item.route_id);
        //Is Being done in MainPage
        // let res = await API.getInfoByRoute(item.route_id);
        // console.log("GETINFOBYROUTES in RouteCard",res);
    };



    render() {
        const {Routes} = this.props;
        return (
            <>
                {
                    Routes.map((route, i) =>
                        <Card height="10%" margin="5px" key={i}
                              onClick={() => this.handleRouteClick(route)}>
                            {route.route_long_name}
                            <ul>

                            </ul>
                        </Card>
                    )
                }
            </>
        )
    }
}

export default RouteCard;