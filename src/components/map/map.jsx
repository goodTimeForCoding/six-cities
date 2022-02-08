import React, {useEffect, useRef, useState} from 'react';
import leaflet from 'leaflet';
import {cardItemsPropsType, cardItemPropsType} from '../prop-types/prop-types-card';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {cards, activeCard} = props;
  const mapRef = useRef(null);
  const [mapSettings, setMapSettings] = useState(null);
  const [firstItem = {}] = cards;

  /*инициализируем карту при первой отрисовке*/
  useEffect(() => {
    const settings = leaflet.map(mapRef.current, {
      center: {
        lat: firstItem.location.latitude,
        lng: firstItem.location.longitude
      },
      zoom: firstItem.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(settings);


    setMapSettings(settings);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  /*добавит эффект подсветки*/
  useEffect(() => {
    if (mapSettings) {
      cards.map((item)=> {
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
        .addTo(mapSettings)
        .bindPopup(item.name);
      });
    }
  }, [cards, activeCard, mapSettings]);

  return (
    <div style={{height: `100%`}} ref={mapRef}></div>
  );
};


Map.propTypes = {
  cards: cardItemsPropsType,
  activeCard: cardItemPropsType
};


export default Map;
