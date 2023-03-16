import { CharacterProps } from './../../../src/components/layout/Character/types';

const fetchCharacter = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return (await res.json()) as unknown as CharacterProps;
};

const CharacterPage = async ({ params }: any) => {
  const character = await fetchCharacter(params.id);

  return (
    <section className="w-full h-[100vh] bg-[#35bacd] font-text">
      <div className="py-[32px] container">
        <img
          className="container w-6/12 rounded-[20px] mb-[24px]"
          src={character.image}
          alt={character.name}
        />
        <h2 className="text-center text-[#f8e643] font-bold text-2xl mb-[24px]">
          {character.name}
        </h2>
        <div className="flex flex-col border rounded-[20px] w-10/12 p-[24px] text-white container">
          <p>
            <strong className="text-[#f8e643]">Status: </strong>
            {character.status}
          </p>
          <p>
            <strong className="text-[#f8e643]">Species: </strong>
            {character.species}
          </p>
          <p>
            <strong className="text-[#f8e643]">Gender: </strong>
            {character.gender}
          </p>
          <p>
            <strong className="text-[#f8e643]">Origin: </strong>
            {character.origin.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterPage;
