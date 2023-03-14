import { Character, Episode, Location } from '@components/icons';
import { ROUTES } from '@utils/constants';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-[var(--accent-color)] h-screen rounded-r-[20px] font-title fixed">
      <nav className="h-[80%] p-5">
        <ul className="flex flex-col h-full justify-around">
          <li>
            <Link
              className="flex flex-col items-center transition ease-in-out duration-200 hover:scale-105 active:underline-offset-1"
              href={ROUTES.characters}>
              <Character width={80} height={80} color="#fff" />
              <span className="text-white text-lg text-center tracking-widest">Characters</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="flex flex-col items-center transition ease-in-out duration-200 hover:scale-105"
              href={ROUTES.characters}>
              <Location width={80} height={80} color="#fff" />
              <span className="text-white text-lg text-center tracking-widest">Location</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="flex flex-col items-center transition ease-in-out duration-200 hover:scale-105"
              href={ROUTES.characters}>
              <Episode width={80} height={80} color="#fff" />
              <span className="text-white text-lg text-center tracking-widest">Episode</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
