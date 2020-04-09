import React, { useEffect, useState, useRef } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
  Marker,
  Circle,
} from "react-leaflet";
import { transMethods } from "../../..//Static/values";

import Location from "../../Location/Location";

const MapComponent = (props) => {
  const [shape, setShape] = useState({});
  const [trirailShape, setTrirailShape] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(undefined);
  const [showPolyline, setShowPolyline] = useState('');
  const mapRef = useRef();

  useEffect(() => {
    if (props.shape?.RoutePath?.length) {
      setShowPolyline('route');
      setShape(props.shape);
      console.log(props.shape)
      mapRef.current.leafletElement.fitBounds(props.shape?.RoutePath);
    }

    if(Array.isArray(props.shape)){
      setShowPolyline('trirail');
      setTrirailShape(props.shape);
      mapRef.current.leafletElement.fitBounds(props.shape);
    }
  }, [props.shape]);

  useEffect(() => {
    if(currentLocation?.position){
      mapRef.current.leafletElement.panTo(currentLocation.position);
    }
  }, [currentLocation]);

  return (
    <LeafletMap center={[25.7617, -80.1918]} zoom={13} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Location setCurrentLocation={setCurrentLocation} />
      {currentLocation?.position && (
        <>
          <Marker position={currentLocation.position} />
          <Circle
            center={currentLocation.position}
            radius={currentLocation.accuracy}
          />
        </>
      )}
      {showPolyline === 'route' && (<><Polyline positions={shape?.RoutePath || []} color={shape?.LineColor}>
        <Popup>{shape.RoutePath && <div>{shape.Names}</div>}</Popup>
      </Polyline>
      {shape?.stops?.map((mark) => <CircleMarker radius={3} center={mark.Shape}><Popup>
          <div>
            {mark.StopName}: {Array.from(new Set(mark.Street.split(' '))).join(' ')}
          </div>
        </Popup></CircleMarker>)
      }</>)}

      {showPolyline === 'trirail' && trirailShape && <Polyline positions={trirailShape} />}
    </LeafletMap>
  );
};

export default MapComponent;
