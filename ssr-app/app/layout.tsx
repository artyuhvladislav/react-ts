import { Header } from '@components/layout';
import { Creepster, Roboto } from 'next/font/google';
import './globals.css';

const creepster = Creepster({
  subsets: ['latin'],
  variable: '--font-creepster',
  weight: '400',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400',
});

export const metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${creepster.variable} ${roboto.variable}`}>
      <body>
        <div className="h-full">
          <div className="container grid bg-white h-full bg-home bg-no-repeat bg-contain bg-right">
            <Header />

            {/* <SearchInput /> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
