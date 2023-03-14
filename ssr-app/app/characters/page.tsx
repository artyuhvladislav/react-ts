import CharacterList from '@components/Character/CharacterList/CharacterList';
import { getCharacters } from 'rickmortyapi';

const fetchCharacters = async (page: number) => {
  const { data } = await getCharacters({ page });
  return { pages: data.info?.pages, characters: data.results };
};

const CharactersPage = async (props: any) => {
  const page = Number(props.searchParams.page);

  const { characters } = await fetchCharacters(page);
  return (
    <div className="py-[24px]">
      <h2 className="mb-[32px] text-2xl font-title tracking-widest text-[var(--accent-color)] font-medium">
        Characters
      </h2>
      <CharacterList characters={characters ?? []} />
    </div>
  );
};

export default CharactersPage;
