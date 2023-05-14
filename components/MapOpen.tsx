import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Step } from '@/types';

type MapProps = {
  steps: Step[];
};

const MapOpen = ({ steps }: MapProps) => {
  const mapContainer = useRef<any>(null);
  const map = useRef<maplibregl.Map | any>(null);

  let stepsLocation: {
    lat: number;
    lng: number;
    cityName: string;
    countryName: string;
    transportIcon: any;
  }[] = [];
  steps.forEach((step: Step) => {
    stepsLocation.push({
      lat: step.stepCityStart.cityLocation.lat,
      lng: step.stepCityStart.cityLocation.lng,
      cityName: step.stepCityStart.cityName,
      countryName: step.stepCityStart.countryName,
      transportIcon: step.transportMethod.icon,
    });
    stepsLocation.push({
      lat: step.stepCityEnd.cityLocation.lat,
      lng: step.stepCityEnd.cityLocation.lng,
      cityName: step.stepCityEnd.cityName,
      countryName: step.stepCityEnd.countryName,
      transportIcon: step.transportMethod.icon,
    });
  });
  const filterStepsLocation = stepsLocation.filter(
    (obj, index) =>
      stepsLocation.findIndex(
        (item) => item.lat === obj.lat && item.lng === obj.lng
      ) === index
  );

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=ZoWffUOKJ3u9EfNnUdkz',
      center: [
        filterStepsLocation[filterStepsLocation.length - 1].lng,
        filterStepsLocation[filterStepsLocation.length - 1].lat,
      ],
      zoom: 4,
    });
    const geojson = {
      type: 'Feature',
      features: filterStepsLocation.map((step) => ({
        properties: {
          city: step.cityName,
          country: step.countryName,
          icon: step.transportIcon,
        },
        geometry: {
          type: 'Point',
          coordinates: {
            lat: step.lat,
            lng: step.lng,
          },
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#888',
          'line-width': 8,
        },
      })),
    };
    for (const feature of geojson.features) {
      const markerIcon = document.createElement('div');
      markerIcon.className = 'location-marker';
      new maplibregl.Marker(markerIcon)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<p style="color:black" >${feature.properties.city}, ${feature.properties.country}</p>`
          )
        )
        .addTo(map.current);
    }

    map.current.on('load', () => {
      map.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: filterStepsLocation.map((step) => [
              step.lng,
              step.lat,
            ]),
          },
        },
      });
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'miter',
          'line-cap': 'butt',
        },
        paint: {
          'line-color': '#AB1205',
          'line-width': 5,
        },
      });
    });
  }, [filterStepsLocation]);

  return (
    <div
      className='map-container h-[300px] w-full md:h-[500px] md:w-full lg:w-[500px] rounded-xl'
      ref={mapContainer}
    />
  );
};

export default MapOpen;
