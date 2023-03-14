import Pagination from '@components/Pagination/Pagination';
import { getCharacters } from 'rickmortyapi';

const CharactersLayout = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await getCharacters();
  const pageCount = data.info?.pages;
  return (
    <section className="pl-[200px] h-full w-full bg-white pb-[32px]">
      {children}
      <Pagination pageCount={pageCount ?? 0} />
    </section>
  );
};
export default CharactersLayout;
