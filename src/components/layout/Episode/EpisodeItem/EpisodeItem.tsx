import { ROUTES } from '@utils/constants';
import Link from 'next/link';
import { EpisodeItemProps } from '../types';
const EpisodeItem = (props: EpisodeItemProps) => {
  const { id, name, air_date, episode, characters } = props;
  return (
    <Link
      href={`${ROUTES.episode}/${id}`}
      key={id}
      className="container text-[var(--accent-color)] font-text flex flex-col items-center w-4/6 text-center">
      <div className="bg-gray-300 rounded-[20px] w-[200px] h-[250px]"></div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{air_date}</p>
      <p>{episode}</p>
    </Link>
  );
};

export default EpisodeItem;
