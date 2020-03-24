import React, {useEffect, useState} from 'react';
import { Map as LeafletMap, TileLayer, CircleMarker, Popup, Polyline } from 'react-leaflet';

const MapComponent = (props) => {

    const [shape, setShape] = useState([]);

    // useEffect(() => {
    //     setShape(props.trips[0].shape_info);
    // }, [props.trips]);

    useEffect(() => {
        setShape(props.shape)
    }, [props.shape]);

    return (
        <LeafletMap center={[25.7617, -80.1918]} zoom={12}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Polyline positions={shape?.RoutePath || []} color={shape?.LineColor}>
                <Popup>
                    {shape.RoutePath &&
                        <div>{shape.Names}</div>
                    }
                </Popup>
            </Polyline>
            {shape?.stops?.map(mark => <CircleMarker radius={3} center={mark}></CircleMarker>)}
        </LeafletMap>
    )
};

export default MapComponent;