import Link from 'next/link';
import { CharacterItemProps } from './../types';
const CharacterItem = (props: CharacterItemProps) => {
  const { id, name, species, status, image } = props;
  return (
    <Link
      href={`/character/${id}`}
      key={id}
      className="text-[var(--accent-color)] font-text flex flex-col items-center w-4/6 text-center">
      <img className="rounded-[20px] mb-[16px]" src={image} />
      <h3 className="text-lg font-bold">{name}</h3>
      <p>
        {species}, {status.toLocaleLowerCase()}
      </p>
    </Link>
  );
};

export default CharacterItem;
