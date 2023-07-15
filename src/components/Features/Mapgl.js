import { card, label, star, date, desc, username } from "./Mapgl.css"
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from "react-map-gl";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Star from "@mui/icons-material/Star";
import axios from "axios";
import { useState } from "react";
import { Box } from '@mui/material'
// import { format } from "timeago.js";
// import { Mapgljson } from "./Mapgljson";


function Mapgl() {
  
  //   const {
  //   state: {
  //     location: { lng, lat },
  //   },
  //   dispatch,
  // } = useValue();
  // const [viewport, setViewport] = useState({
  //     width: "100vw",
  //     height: "100vh",
  //     latitude: 46,
  //     longitude: 17,
  //     zoom: 4,
  // });

  // const [pins, setPins] = useState([]);
  const [lng, setLng] = useState(7.37585762735543);
  const [lat, setLat] = useState(45.45677614934833);


  // const Mapgljson = ({ title, username, desc, rating, lat, lng }) => {

    // useEffect(() => {
    //   const getPins = async () => {
    //     try {
    //       const allPins = await axios.get("/pins");
    //       setPins(allPins.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   getPins();
    // }, []);


  return (
    // <Box
    //   style={{
    //     height: "500px",
    //     width: "500px",
    //     position: "relative",
    //     // zoom: 1,
    //   }}
    // >
      <div className="Mapgl">
        <h1>mapbox test</h1>
        <Map
          mapboxAccessToken="pk.eyJ1Ijoic29maWVjaG9pIiwiYSI6ImNsYjJnbW9odjA1NWgzb3B4c3F5bG43ZjAifQ.PqRDOZ4BxYT6BovOxq6A-g"

          style={{
            width: "500px",
            height: "500px",
            borderRadius: "15px",
            border: "5px solid white",
          }}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            // zoom: 8,
          }}
          // onViewportChange={(nextViewport) => setViewport(nextViewport)};
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {/* {pins.map((p) => (
          <> */}
          <Marker
            latitude={lat}
            longitude={lng}
            // draggable
            // onDragEnd={(e) =>
            //   dispatch({
            //     type: 'UPDATE_LOCATION',
            //     payload: { lng: e.lngLat.lng, lat: e.lngLat.lat },
            //   })
            // }
          />
          <LocationOnIcon style={{ color: "slateblue" }} />
          <Popup
            latitude={lat}
            longitude={lng}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div className="card">
              <label>PLACE</label>
              <h4 className="place">Eiffell Tower</h4>
              <label>REVIEW</label>
              <p className="desc">Beautiful place. I fancy here.</p>
              <label>RATING</label>
              <div className="stars">
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
              </div>
              <label>DESCRIPTION</label>
              <span className="username">
                Created by <b>Bryan</b>
              </span>
              <span className="date">1 hour ago</span>
            </div>
          </Popup>
          {/* </>  */}
          ))}
          <NavigationControl position="bottom-right" />
          {/* <FullscreenControl /> */}
          <GeolocateControl
            position="top-left"
            trackUserLocation
          />
        </Map>
      </div>
    // </Box>
  );
}

export default Mapgl;