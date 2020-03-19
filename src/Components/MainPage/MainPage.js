import React, { useEffect, useState, useCallback } from "react";
import { ListContainer, MainContainer, MapContainer } from "./styles";
import ListCard from "./ListCard";
import API from "../../Services/API";
import MapComponent from "./Map";

const MainPage = () => {
  const [routeId, setRouteId] = useState("");
  const [routes, setRoutes] = useState([]);
  const [shape, setShape] = useState({});
  const [tokens, setTokens] = useState({});
  const [currentToken, setCurrentToken] = useState("");
  const [points, setPoints] = useState([]);

  const getShapes = useCallback(async (routeId) => {
    if(routeId){
      let shape = await API.getShapeByRoute(currentToken, routeId);
      setShape(shape);
    }
  }, [currentToken])

  useEffect(() => {
    async function fetchData() {
      let apiTokens = await API.getTokens();
      setTokens(apiTokens);
      setCurrentToken(Object.values(apiTokens)[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchRoutes() {
      let apiRoutes = await API.getRoutes(currentToken);
      setRoutes(apiRoutes);
      setPoints(apiRoutes.points);
    }

    fetchRoutes();
  }, [currentToken]);

  useEffect(() => {
    getShapes(routeId);
  }, [routeId, getShapes]);

  return (
    // Map LeftSide
    <MainContainer>
      <MapContainer>
        <MapComponent shape={shape} points={points} />
      </MapContainer>

      {/*//Routes List RightSide*/}
      <ListContainer>
        <ListCard
          title={"Routes"}
          routes={routes}
          passRouteId={setRouteId}
          setCurrentToken={setCurrentToken}
          tokens={tokens}
        />
        {/* <RouteCard title={"Trips"}/> */}
      </ListContainer>
    </MainContainer>
  );
};

export default MainPage;
