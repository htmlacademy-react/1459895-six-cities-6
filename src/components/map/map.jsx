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

const getActiveCityObject = (activeLocation, offers) => {
  return offers.find((offer) => offer.city.name === activeLocation);
};

const setMarkers = (map, offers, activeCard) => {
  offers.forEach((offer) => {
    leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon: offer.id === activeCard ? ACTIVE_POINT_ICON : ICON})
      .addTo(map)
      .bindPopup(offer.title);
  });
};

const getCityOffers = (offers, activeLocation) => {
  return offers.filter((offer) => offer.city.name === activeLocation);
};

const Map = ({activeLocation, offers, activeCard}) => {
  const mapRef = useRef();

  useEffect(() => {
    const cityObject = getActiveCityObject(activeLocation, offers);
    const cityOffers = getCityOffers(offers, activeLocation);
    const {city: {location}} = cityObject;
    mapRef.current = leaflet.map(`map`, {
      center: [location.latitude, location.longitude],
      zoom: location.zoom,
      zoomControl: false,
      marker: true,
      layers: [
        leaflet
          .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
      ]
    });

    setMarkers(mapRef.current, cityOffers, activeCard);

    return () => {
      mapRef.current.remove();
    };
  }, [activeLocation]);

  useEffect(() => {
    const cityOffers = getCityOffers(offers, activeLocation);
    setMarkers(mapRef.current, cityOffers, activeCard);
  }, [activeCard]);

  return (
    <div id="map" ref={mapRef} style={MapStyle}></div>
  );

};

Map.propTypes = {
  activeLocation: PropTypes.string,
  offers: PropTypes.arrayOf(OfferPropTypes),
  activeCard: PropTypes.number
};

export default Map;

