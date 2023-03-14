'use client';
import CharacterList from '@components/Character/CharacterList/CharacterList';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getCharacters, ApiResponse, Character, CharacterFilter, Info } from 'rickmortyapi';

interface PaginatedItemsProps {
  itemsPerPage: number;
}

const fetchCharacters = async () => {
  const { data } = await getCharacters();
  return { pages: data.info?.pages ?? 0, characters: data.results ?? [] };
};

const PaginatedItems = async ({ itemsPerPage }: PaginatedItemsProps) => {
  const { pages, characters } = await fetchCharacters();
  const [itemOffset, setItemOffset] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = characters.slice(itemOffset, endOffset);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % characters.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <CharacterList characters={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="< previous"
      />
    </>
  );
};

export default PaginatedItems;
