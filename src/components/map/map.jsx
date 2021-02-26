import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {OfferPropTypes} from "../../props";
import {MapStyle} from "../../const";

import "../../../node_modules/leaflet/dist/leaflet.css";

const ICON = leaflet.icon({
  iconUrl: `./img/pin.svg`,
  iconSize: [27, 39]
});

const ACTIVE_POINT_ICON = leaflet.icon({
  iconUrl: `./img/pin-active.svg`,
  iconSize: [27, 39]
});

const Map = ({activeLocation, offers, activeCard, mapStyle}) => {

  const mapRef = useRef();
  const markersRef = useRef(leaflet.layerGroup([]));
  const activeMarkerRef = useRef(leaflet.layerGroup([]));

  useEffect(() => {
    const {city: {location}} = activeLocation;
    mapRef.current = leaflet.map(`map`, {
      center: [location.latitude, location.longitude],
      zoom: location.zoom,
      zoomControl: false,
      marker: true,
      layers: [markersRef.current, activeMarkerRef.current]
    });

    leaflet
          .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
          .addTo(mapRef.current);

    mapRef.current.setView([location.latitude, location.longitude], location.zoom);

    return () => {
      mapRef.current.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const {city: {location}} = activeLocation;
    if (mapRef.current) {
      mapRef.current.flyTo(
          [location.latitude, location.longitude],
          location.zoom,
          {duration: 0.5}
      );

      offers.map((offer) => {
        markersRef.current.addLayer(
            leaflet.marker([offer.location.latitude, offer.location.longitude], {
              icon: ICON,

            })
        );
      });
    }

    return () => {
      markersRef.current.clearLayers();
    };
  }, [offers, activeLocation.city.name]);

  useEffect(() => {
    if (activeCard) {
      const {location} = activeCard;

      activeMarkerRef.current.addLayer(
          leaflet.marker(
              [location.latitude, location.longitude],
              {icon: ACTIVE_POINT_ICON}
          )
      );
    }
    return () => {
      activeMarkerRef.current.clearLayers();
    };
  }, [activeCard]);

  return (
    <div id="map" ref={mapRef} style={MapStyle[mapStyle]}></div>
  );

};

Map.propTypes = {
  activeLocation: OfferPropTypes,
  offers: PropTypes.arrayOf(OfferPropTypes),
  activeCard: OfferPropTypes,
  mapStyle: PropTypes.string
};

export default Map;

