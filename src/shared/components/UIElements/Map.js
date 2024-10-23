import React, { useRef, useEffect } from "react";
//import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

import "./Map.css";

const Map = props => {
  const mapRef = useRef(); // useRef() returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

  const { center, zoom } = props; // We use object destructuring to extract the center and zoom props.

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, { // window.google.maps.Map is the constructor function that creates a new map inside of the div element we pass as the first argument.
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map }); // window.google.maps.Marker is the constructor function that creates a new marker on the map we pass as the second argument.
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  ); // We use the ref attribute to pass the mapRef to the div element. This way, we can access the div element in the DOM and render the map inside of it.
};

export default Map;

// const Map = props => {

//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "YOUR_API_KEY"
//     });

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         setMap(map)
//     }, []);

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, []);

//     return isLoaded ? (
// 		<GoogleMap
// 			mapContainerClassName="map"
// 			center={prop.center}
// 			zoom={prop.zoom}
// 			onLoad={onLoad}
// 			onUnmount={onUnmount}
// 		>
// 			{<MarkerF position={prop.center} />}
// 			<></>
// 		</GoogleMap>
// 	) : (
// 		<></>
// 	);
// };

// export default React.memo(Map);
