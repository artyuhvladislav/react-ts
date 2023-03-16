'use client';

import CharacterItem from '../CharacterItem/CharacterItem';
import { CharacterListProps } from '../types';

const CharacterList = ({ characters }: CharacterListProps) => {
  const characterElements = () => {
    return characters.map((character) => {
      return <CharacterItem {...character} key={character.id} />;
    });
  };

  return <ul className="grid grid-cols-1 gap-5 mt-[24px] mb-[24px]">{characterElements()}</ul>;
};

export default CharacterList;
