import { Character, Episode, Location, Home } from '@components/icons';
import { ROUTES } from '@utils/constants';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="order-2 h-[70px] w-full fixed bg-[var(--accent-color)] rounded-tl-[20px] rounded-tr-[20px] sm:h-screen sm:rounded-r-[20px] sm:rounded-l-0 font-title bottom-0">
      <nav className="h-full pt-[20px]">
        <ul className="flex sm:flex-col h-full justify-around">
          <li>
            <Link
              className="w-[20px] flex flex-col items-center transition ease-in-out duration-200 hover:scale-105 active:underline-offset-1"
              href={ROUTES.main}>
              <Home width={80} height={80} color="#fff" />
              <span className="text-white text-lg text-center tracking-widest">Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="w-[20px] flex flex-col items-center transition ease-in-out duration-200 hover:scale-105 active:underline-offset-1"
              href={ROUTES.characters}>
              <Character width={80} height={80} color="#fff" />
              <span className="text-white text-sm text-center tracking-widest">Characters</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="w-[20px] flex flex-col items-center transition ease-in-out duration-200 hover:scale-105"
              href={ROUTES.location}>
              <Location width={80} height={80} color="#fff" />
              <span className="text-white text-sm text-center tracking-widest">Location</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="w-[20px] flex flex-col items-center transition ease-in-out duration-200 hover:scale-105"
              href={ROUTES.episode}>
              <Episode width={80} height={80} color="#fff" />
              <span className="text-white text-sm text-center tracking-widest">Episode</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
