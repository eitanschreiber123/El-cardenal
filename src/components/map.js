/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
    width: 'min(500px, 80vw)',
    height: '200px',
};

//K2's coordinates
const defaultMapCenter = {
    lat:-4.0196473, lng:-79.2019505

}

//Default zoom level, can be adjusted
const defaultMapZoom = 16

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

const MapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
            </GoogleMap>
        </div>
    )
};

export { MapComponent };