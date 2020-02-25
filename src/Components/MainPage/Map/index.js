import React from 'react';

import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';

const MapComponent = () => {
    return (
        <LeafletMap center={[25.7601, -80.3744]} zoom={18}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[25.7601, -80.3744]}>
                <Popup>
                    <div>
                        <h2>FIU Parking Garage 6</h2>
                    </div>
                </Popup>
            </Marker>
        </LeafletMap>
    )
};

export default MapComponent;