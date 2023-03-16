import CharacterList from '@components/layout/Character/CharacterList/CharacterList';
import Pagination from '@components/Pagination/Pagination';
import SearchInput from '@components/SearchInput/SearchInput';
import { ROUTES } from '@utils/constants';
import { getCharacters } from 'rickmortyapi';

const fetchCharacters = async (page: number, searchString: string) => {
  const { data } = await getCharacters({ page, name: searchString });
  return { pageCount: data.info?.pages, characters: data.results };
};

const CharactersPage = async (props: any) => {
  const page = Number(props.searchParams.page);
  const searchString = props.searchParams.name ?? '';

  const { characters, pageCount } = await fetchCharacters(page, searchString);
  return (
    <div className="py-[24px] pb-[32px] px-[24px] pb-[130px]">
      <h2 className="mb-[24px] text-2xl font-title tracking-widest text-[var(--accent-color)] font-medium">
        Characters
      </h2>
      <SearchInput />
      <CharacterList characters={characters ?? []} />
      <Pagination pageCount={pageCount ?? 0} url={ROUTES.characters} searchParam="name" />
    </div>
  );
};

export default CharactersPage;
