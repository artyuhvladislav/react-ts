'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { PaginationProps } from './types';

const Pagination = ({ pageCount, url, searchParam }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPaginationLength = pageCount > 3 ? 3 : pageCount;
  const paginationArr = [...Array(defaultPaginationLength)].map((_, idx) => idx + 1);
  const [paginationCurrentArr, setPaginationCurrentArr] = useState(paginationArr);
  const mounted = useRef(false);
  const searchParams = useSearchParams();
  const currentSearchString = searchParams.get(searchParam);

  useEffect(() => {
    mounted.current = true;
    const currentPage = Number(searchParams.get('page'));
    setCurrentPage(currentPage);
    createNewPaginationArray(currentPage);
    mounted.current = false;
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  useEffect(() => {
    setPaginationCurrentArr([...Array(defaultPaginationLength)].map((_, idx) => idx + 1));
  }, [currentSearchString]);

  const createNewPaginationArray = (newCurrentPage: number) => {
    // for prev last page
    if (
      paginationCurrentArr[0] === newCurrentPage &&
      newCurrentPage !== 1 &&
      newCurrentPage > defaultPaginationLength
    ) {
      const newPaginationCurrentArr = [
        ...[...Array(defaultPaginationLength)].map((_, idx) => newCurrentPage - idx).reverse(),
      ];
      setPaginationCurrentArr(newPaginationCurrentArr);
      return;
    }
    //for less than pagecount
    if (newCurrentPage < defaultPaginationLength) {
      setPaginationCurrentArr([...Array(defaultPaginationLength)].map((_, idx) => idx + 1));
      return;
    }

    // for first page
    if (newCurrentPage === 1) {
      setPaginationCurrentArr([...Array(defaultPaginationLength)].map((_, idx) => idx + 1));
      return;
    }

    if (newCurrentPage === pageCount) {
      const newPaginationCurrentArr = [...[...Array(pageCount)].map((_, idx) => idx + 1)].slice(
        -defaultPaginationLength,
      );
      setPaginationCurrentArr(newPaginationCurrentArr);
      return;
    }

    // TO FIX for next page
    if (paginationCurrentArr.at(paginationCurrentArr.length - 1) === newCurrentPage) {
      const newPaginationCurrentArr = [
        ...[...Array(defaultPaginationLength)].map((_, idx) => newCurrentPage + idx - 1),
      ].slice(-defaultPaginationLength);
      setPaginationCurrentArr(newPaginationCurrentArr);
      return;
    }
    // for last page

    // if (mounted.current) {
    //   let newPaginationCurrentArr: number[] = [];
    //   if (newCurrentPage < defaultPaginationLength) {
    //     setPaginationCurrentArr(paginationArr);
    //     return;
    //   } else if (newCurrentPage >= defaultPaginationLength && newCurrentPage !== pageCount) {
    //     newPaginationCurrentArr = [
    //       newCurrentPage - 3,
    //       newCurrentPage - 2,
    //       newCurrentPage - 1,
    //       newCurrentPage,
    //       newCurrentPage + 1,
    //     ];
    //   } else if (newCurrentPage === pageCount) {
    //     newPaginationCurrentArr = [
    //       newCurrentPage - 4,
    //       newCurrentPage - 3,
    //       newCurrentPage - 2,
    //       newCurrentPage - 1,
    //       newCurrentPage,
    //     ];
    //   }

    //   setPaginationCurrentArr(newPaginationCurrentArr);
    // }
  };

  const handleClick = (event: any) => {
    const target = event.target as HTMLLIElement;
    if (target) {
      const newCurrentPage = Number(target.textContent);
      setCurrentPage(newCurrentPage);
      createNewPaginationArray(newCurrentPage);
    }
  };

  const handleFirstPageClick = () => {
    setCurrentPage(1);
    createNewPaginationArray(1);
  };

  const handleLastPageClick = () => {
    setCurrentPage(pageCount);
    createNewPaginationArray(pageCount);
  };

  return (
    <ul className="flex justify-center">
      {currentPage !== 1 && (
        <>
          <li
            className={
              'flex items-center justify-center w-10 h-10  bg-[var(--accent-color)]  mr-2 text-center rounded-[5px] text-white'
            }
            onClick={handleFirstPageClick}>
            <Link
              href={{
                pathname: `${url}`,
                query: { page: 1, name: currentSearchString },
              }}>
              &lt;&lt;
            </Link>
          </li>
        </>
      )}

      {currentPage >= defaultPaginationLength && (
        <li
          className={
            'flex items-center justify-center w-10 h-10 bg-[var(--accent-color)] mr-2 text-center rounded-[5px] text-white'
          }>
          ...
        </li>
      )}
      {paginationCurrentArr.map((pageIdx) => (
        <li
          key={pageIdx}
          className={
            currentPage === pageIdx
              ? 'flex items-center justify-center w-10 h-10 bg-[var(--second-accent-color)] mr-2 text-center rounded-[5px] text-white'
              : 'flex items-center justify-center w-10 h-10 bg-[var(--accent-color)]  mr-2 text-center rounded-[5px] text-white'
          }
          onClick={handleClick}>
          <Link
            href={{
              pathname: `${url}`,
              query: { page: pageIdx, name: currentSearchString },
            }}>
            {pageIdx}
          </Link>
        </li>
      ))}
      {currentPage >= defaultPaginationLength && currentPage !== pageCount && (
        <li
          className={
            'flex items-center justify-center w-10 h-10 bg-[var(--accent-color)] mr-2 text-center rounded-[5px] text-white'
          }>
          ...
        </li>
      )}
      {currentPage !== pageCount && (
        <>
          <li
            className={
              'flex items-center justify-center w-10 h-10 bg-[var(--accent-color)]  mr-2 text-center rounded-[5px] text-white'
            }
            onClick={handleLastPageClick}>
            <Link
              href={{
                pathname: `${url}`,
                query: { page: pageCount, name: currentSearchString },
              }}>
              &gt;&gt;
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Pagination;
