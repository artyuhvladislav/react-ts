'use client';
// import { useRouter } from 'next/router';

const fetchCharacter = async () => {
  // const router = useRouter();
  // const { page } = router.query;
  // console.log(page);
  // const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  // return await res.json();
};

const CharacterPage = async () => {
  const character = await fetchCharacter();
  return <section>{111}</section>;
};

export default CharacterPage;
