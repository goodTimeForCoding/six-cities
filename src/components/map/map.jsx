import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {cardItemsPropsType, cardItemPropsType} from '../prop-types/prop-types-card';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {cards, activeCard} = props;
  const mapRef = useRef(null);

  /*инициализируем карту при первой отрисовке*/
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: cards[0].city.location.latitude,
        lng: cards[0].city.location.longitude
      },
      zoom: cards[0].city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [cards, mapRef]);

  /*добавит эффект подсветки*/
  useEffect(() => {
    if (mapRef.current) {
      cards.map((item) => {
        const isActive = activeCard ? item.id === activeCard.id : false;
        const customIcon = leaflet.icon({
          iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
          iconSize: [27, 39]
        });

        leaflet.marker({
          lat: item.location.latitude,
          lng: item.location.longitude
        },
          {
            icon: customIcon
          })
          .addTo(mapRef.current)
          .bindPopup(item.title);
      });
    }
  }, [cards, activeCard, mapRef]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};


Map.propTypes = {
  cards: cardItemsPropsType,
  activeCard: cardItemPropsType
};


export default Map;
