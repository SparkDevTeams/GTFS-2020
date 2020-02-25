import React from 'react';
import Card from "../../Commons/Card/Card";
import API from "../../../Services/API";




class RouteCard extends React.Component {
    constructor(props) {
        super(props);
    }

     handleRouteClick = async (item) => {
        this.props.callBack(item.route_id);
        let res = await API.getInfoByRoute(item.route_id);
        console.log(res);
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
                        </Card>
                    )
                }
            </>
        )
    }
}

export default RouteCard;