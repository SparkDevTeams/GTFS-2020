import React, { useEffect, useState, useCallback } from "react";
import {
  ListContainer,
  MainContainer,
  MapContainer,
  PageTitle,
  TextField,
} from "./styles";
import ListCard from "./ListCard";
import API from "../../Services/API";
import MapComponent from "./Map";
import { transMethods } from "../../Static/values";
import TrainsPanel from "./TrainsPanel/TrainsPanel";
import TrirailPanel from './TrirailPanel/TrirailPanel';

const MainPage = () => {
  const [routeId, setRouteId] = useState("");
  const [routes, setRoutes] = useState([]);
  const [shape, setShape] = useState({});
  const [tokens, setTokens] = useState({});
  const [currentToken, setCurrentToken] = useState("");
  const [points, setPoints] = useState([]);
  const [currentTransMethod, setCurrentTransMethod] = useState(undefined);

  const getDataPerRoute = useCallback(
    async (routeId) => {
      if (routeId) {
        let shape = await API.getShapeByRoute(currentToken, routeId);
        let stops = await API.getStopsByRoute(routeId);
        setShape({ ...shape, stops });
      }
    },
    [currentToken]
  );

  const getBusData = useCallback(async () => {
    let apiTokens = await API.getTokens();
    setTokens(apiTokens);
    setCurrentToken(Object.values(apiTokens)[0]);
  }, []);

  useEffect(() => {
    if(currentTransMethod === transMethods[2]){
      getBusData();
    }
  }, [currentTransMethod, getBusData])
  /*
  Fetches routes onLoad &
  Fetch routes per token passed
  Rerender component when CurrentToken Changes
   */
  useEffect(() => {
    async function fetchRoutes() {
      let apiRoutes = await API.getRoutes(currentToken);
      setRoutes(apiRoutes);
      setPoints(apiRoutes.points);
    }

    fetchRoutes();
  }, [currentToken]);

  useEffect(() => {
    getDataPerRoute(routeId);
  }, [routeId, getDataPerRoute]);

  return (
    // Map LeftSide
    <MainContainer>
      <MapContainer>
        <MapComponent shape={shape} currentTransMethod={currentTransMethod} />
      </MapContainer>

      {/*//Routes List RightSide*/}
      <ListContainer>
        <PageTitle>Select Method of Transportation:</PageTitle>
        <TextField as="select"
          value={currentTransMethod}
          onChange={(e) => setCurrentTransMethod(e.currentTarget.value)}>
        
          <option></option>
          {transMethods.map((method, idx) => (
            <option value={method} key={idx}>
              {method}
            </option>
          ))}
        </TextField>
        {currentTransMethod === transMethods[0] && <TrainsPanel />}
        {currentTransMethod === transMethods[1] && <TrirailPanel setShape={setShape}/>}
        {currentTransMethod === transMethods[2] && (
          <ListCard
            title={"Routes"}
            routes={routes}
            passRouteId={setRouteId}
            setCurrentToken={setCurrentToken}
            tokens={tokens}
          />
        )}

        {/* <RouteCard title={"Trips"}/> */}
      </ListContainer>
    </MainContainer>
  );
};

export default MainPage;
