import React, { useEffect, useState, useRef } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
} from "react-leaflet";

const MapComponent = (props) => {
  const [shape, setShape] = useState([]);
  const mapRef = useRef();

  useEffect(() => {
    setShape(props.shape);
    if (props.shape?.RoutePath?.length) {
      mapRef.current.leafletElement.panTo(props.shape?.RoutePath?.[Math.floor((props.shape?.RoutePath?.length - 1) / 2)]);
    }
  }, [props.shape]);

  return (
    <LeafletMap center={[25.7617, -80.1918]} zoom={13} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={shape?.RoutePath || []} color={shape?.LineColor}>
        <Popup>{shape.RoutePath && <div>{shape.Names}</div>}</Popup>
      </Polyline>
      {shape?.stops?.map((mark) => (
        <CircleMarker radius={3} center={mark}></CircleMarker>
      ))}
    </LeafletMap>
  );
};

export default MapComponent;
