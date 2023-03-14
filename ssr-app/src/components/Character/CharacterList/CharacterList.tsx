'use client';

import CharacterItem from '../CharacterItem/CharacterItem';
import { CharacterListProps } from '../types';

const CharacterList = ({ characters }: CharacterListProps) => {
  const characterElements = () => {
    return characters.map((character) => {
      return <CharacterItem {...character} key={character.id} />;
    });
  };

  return <ul className="grid grid-cols-4 gap-5">{characterElements()}</ul>;
};

export default CharacterList;
