'use client';

import mapbox, {
  Map as Card,
  Marker,
  NavigationControl,
  Popup,
} from 'mapbox-gl';
import { useEffect, useRef } from 'react';

import { config, mapConfig } from '@/constants';

import { MapProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

const Map = ({ markers }: MapProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Card | null>(null);
  const { center, zoom } = mapConfig;

  useEffect(() => {
    mapbox.accessToken = config.mapToken;
    const map = new Card({
      container: mapContainerRef.current as HTMLDivElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center,
      attributionControl: false,
      boxZoom: true,
      zoom: zoom,
    });
    map.addControl(new NavigationControl(), 'top-right');

    markers.forEach((marker) => {
      const { lng, lat, description } = marker;
      const popup = new Popup().setText(description).addTo(map);
      new Marker().setLngLat({ lng, lat }).addTo(map).setPopup(popup);
    });

    mapRef.current = map;

    return () => map.remove();
  }, []);

  return <div className={wrapper} ref={mapContainerRef}></div>;
};

export default Map;
