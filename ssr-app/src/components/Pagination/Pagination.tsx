'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { PaginationProps } from './types';

const Pagination = ({ pageCount }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPaginationLength = pageCount > 5 ? 5 : pageCount;
  const [paginationLength] = useState(defaultPaginationLength);
  const paginationArr = [...Array(paginationLength)].map((_, idx) => idx + 1);
  const [paginationCurrentArr, setPaginationCurrentArr] = useState(paginationArr);
  const mounted = useRef(false);
  const searchParams = useSearchParams();

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

  const createNewPaginationArray = (newCurrentPage: number) => {
    if (paginationCurrentArr.at(0) === newCurrentPage && newCurrentPage !== 1) {
      if (
        paginationCurrentArr.at(0) === newCurrentPage &&
        newCurrentPage < defaultPaginationLength
      ) {
        setPaginationCurrentArr(paginationArr);
        return;
      }
      const newPaginationCurrentArr = [
        newCurrentPage - 3,
        newCurrentPage - 2,
        newCurrentPage - 1,
        newCurrentPage,
        newCurrentPage + 1,
      ];
      setPaginationCurrentArr(newPaginationCurrentArr);
    }

    if (
      paginationCurrentArr.at(paginationCurrentArr.length - 1) === newCurrentPage ||
      newCurrentPage === pageCount
    ) {
      if (newCurrentPage === pageCount) {
        const newPaginationCurrentArr = [
          newCurrentPage - 4,
          newCurrentPage - 3,
          newCurrentPage - 2,
          newCurrentPage - 1,
          newCurrentPage,
        ];
        setPaginationCurrentArr(newPaginationCurrentArr);
        return;
      }
      const newPaginationCurrentArr = [
        newCurrentPage - 1,
        newCurrentPage,
        newCurrentPage + 1,
        newCurrentPage + 2,
        newCurrentPage + 3,
      ];
      setPaginationCurrentArr(newPaginationCurrentArr);
    }

    if (mounted.current) {
      let newPaginationCurrentArr: number[] = [];
      if (newCurrentPage < defaultPaginationLength) {
        setPaginationCurrentArr(paginationArr);
        return;
      } else if (newCurrentPage >= defaultPaginationLength && newCurrentPage !== pageCount) {
        newPaginationCurrentArr = [
          newCurrentPage - 3,
          newCurrentPage - 2,
          newCurrentPage - 1,
          newCurrentPage,
          newCurrentPage + 1,
        ];
      } else if (newCurrentPage === pageCount) {
        newPaginationCurrentArr = [
          newCurrentPage - 4,
          newCurrentPage - 3,
          newCurrentPage - 2,
          newCurrentPage - 1,
          newCurrentPage,
        ];
      }

      setPaginationCurrentArr(newPaginationCurrentArr);
    }
  };

  const handleClick = (event: any) => {
    const target = event.target as HTMLLIElement;
    if (target) {
      const newCurrentPage = Number(target.textContent);
      setCurrentPage(newCurrentPage);
      createNewPaginationArray(newCurrentPage);
    }
  };

  const handlePrevPageClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    createNewPaginationArray(currentPage);
  };

  const handleFirstPageClick = () => {
    setCurrentPage(1);
    createNewPaginationArray(1);
  };

  const handleLastPageClick = () => {
    setCurrentPage(pageCount);
    createNewPaginationArray(pageCount);
  };

  const handleNextPageClick = () => {
    if (currentPage <= pageCount) {
      setCurrentPage(currentPage + 1);
      createNewPaginationArray(currentPage);
    }
  };

  return (
    <ul className="flex justify-center">
      {currentPage !== 1 && (
        <>
          <li
            className={'bg-[var(--accent-color)] w-7 h-6 mr-2 text-center rounded-[5px] text-white'}
            onClick={handleFirstPageClick}>
            <Link
              href={{
                pathname: `/characters/`,
                query: { page: 1 },
              }}>
              &lt;&lt;
            </Link>
          </li>
          <li
            className={'bg-[var(--accent-color)] w-6 h-6 mr-2 text-center rounded-[5px] text-white'}
            onClick={handlePrevPageClick}>
            <Link
              href={{
                pathname: `/characters/`,
                query: { page: currentPage !== 1 ? currentPage - 1 : currentPage },
              }}>
              &lt;
            </Link>
          </li>
        </>
      )}

      {currentPage >= defaultPaginationLength && (
        <li
          className={'bg-[var(--accent-color)] w-6 h-6 mr-2 text-center rounded-[5px] text-white'}>
          ...
        </li>
      )}
      {paginationCurrentArr.map((pageIdx) => (
        <li
          key={pageIdx}
          className={
            currentPage === pageIdx
              ? 'bg-[var(--second-accent-color)] w-6 h-6 mr-2 text-center rounded-[5px] text-white'
              : 'bg-[var(--accent-color)] w-6 h-6 mr-2 text-center rounded-[5px] text-white'
          }
          onClick={handleClick}>
          <Link
            href={{
              pathname: `/characters/`,
              query: { page: pageIdx },
            }}>
            {pageIdx}
          </Link>
        </li>
      ))}
      {currentPage >= defaultPaginationLength && currentPage !== pageCount && (
        <li
          className={'bg-[var(--accent-color)] w-6 h-6 mr-2 text-center rounded-[5px] text-white'}>
          ...
        </li>
      )}
      {currentPage !== pageCount && (
        <>
          <li
            className={'bg-[var(--accent-color)] w-6 h-6 mr-2 text-center rounded-[5px] text-white'}
            onClick={handleNextPageClick}>
            <Link
              href={{
                pathname: `/characters/`,
                query: { page: currentPage !== pageCount ? currentPage + 1 : currentPage },
              }}>
              &gt;
            </Link>
          </li>
          <li
            className={'bg-[var(--accent-color)] w-7 h-6 mr-2 text-center rounded-[5px] text-white'}
            onClick={handleLastPageClick}>
            <Link
              href={{
                pathname: `/characters/`,
                query: { page: pageCount },
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
