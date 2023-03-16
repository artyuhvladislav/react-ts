import Link from 'next/link';
import { LocationItemProps } from '../types';
const LocationItem = (props: LocationItemProps) => {
  const { id, name, type, dimension, residents } = props;
  return (
    <Link
      href={`/character/${id}`}
      key={id}
      className="container text-[var(--accent-color)] font-text flex flex-col items-center w-4/6 text-center">
      <div className="bg-gray-300 rounded-[20px] w-[200px] h-[250px]"></div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{type}</p>
      <p>{dimension}</p>
    </Link>
  );
};

export default LocationItem;
