'use client';

import LocationItem from '../LocationItem/LocationItem';
import { LocationListProps } from '../types';

const LocationList = ({ locations }: LocationListProps) => {
  const locationElements = () => {
    return locations.map((location) => {
      return <LocationItem {...location} key={location.id} />;
    });
  };

  return <ul className="grid grid-cols-1 gap-5 mt-[24px] mb-[24px]">{locationElements()}</ul>;
};

export default LocationList;
