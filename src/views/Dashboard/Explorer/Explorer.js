import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import ModelLayer from "./ModelLayer";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { MdOutlineLink } from "react-icons/md";
import { HiArrowCircleRight, HiExternalLink } from "react-icons/hi";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Explorer() {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only created once

  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/ohmio/clergrzy2007j01mgjhdvcugk",
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: 0,
      container: "map",
      antialias: true,
      projection: "globe",
    });
    setMap(newMap);

    newMap.on("load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = newMap.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"],
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      newMap.addControl(new mapboxgl.NavigationControl());
      // Add geolocate control to the map.
      newMap.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        }),
      );
      newMap.addControl(new mapboxgl.FullscreenControl());

      newMap.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId,
      );

      // parameters to ensure the model is georeferenced correctly on the map
      const modelOrigin = [-74.0066, 40.7135];
      const modelAltitude = 0;
      newMap.addLayer(
        new ModelLayer({
          id: "layer-3d",
          url: "https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf",
          origin: modelOrigin,
          altitude: modelAltitude,
          rotateY: 1,
          scale: 34.8,
        }),
      );
    });
  }, []);

  const placeAntenna = (position) => {
    let auxiliarString = position.toString();
    console.log(auxiliarString);
    map.addLayer(
      new ModelLayer({
        id: auxiliarString,
        url: "https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf",
        origin: position,
        altitude: 1,
        rotateY: 1,
        scale: 34.8,
      }),
    );
  };

  const flyToRandom = () => {
    // Fly to a random location
    let randomLocation = [
      (Math.random() - 0.3) * 360,
      (Math.random() - 0.3) * 100,
    ];
    map.flyTo({
      center: randomLocation,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
    placeAntenna(randomLocation);
  };

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Flex
        flexDirection={"row"}
        style={{ zIndex: 1, marginBottom: "4rem" }}
        gap="1rem"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box bgGradient="linear(to-r, #f9ae40, #49bfad)" borderRadius={50}>
          <Button
            onClick={flyToRandom}
            leftIcon={<HiExternalLink size={22} />}
            style={{ backgroundColor: "transparent" }}
          >
            OHMIO Box
          </Button>
        </Box>
        <img
          src="/icon.png"
          onClick={flyToRandom}
          style={{ width: "4rem", height: "4rem" }}
        />
        <Button
          onClick={flyToRandom}
          rightIcon={<HiArrowCircleRight size={22} />}
        >
          Siguiente estación
        </Button>
      </Flex>
    </div>
  );
}
