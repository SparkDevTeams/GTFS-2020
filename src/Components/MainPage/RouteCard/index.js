import React, { useEffect, useState } from 'react';
import Card from "../../Commons/Card/Card";
import { CardListContainer } from './styles';
import { IoIosBus } from 'react-icons/io';


const RouteCard = (props) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (props.Routes.routes) {
      if (Object.entries(props.Routes.routes).length !== 0) {
        setRoutes(props.Routes.routes);
      }
      else {
        setRoutes([]);
      }
    }
  }, [props.Routes]);

  const handleRouteClick = async (item) => {
    props.callBack(item.RouteId);
  };

  return (
    <CardListContainer>
      {
        routes.map((route, i) =>
          <Card width="90%" height="20%" margin="10px" cursor="pointer" hover selfCenter key={route.RouteId}
            onClick={() => handleRouteClick(route)}>
            <IoIosBus/> {route.Name1}
          </Card>
        )
      }
    </CardListContainer>
  )
}

export default RouteCard;