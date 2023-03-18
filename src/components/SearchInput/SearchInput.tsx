'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      // if (params.has(name)) {
      //   params.delete(name);
      // }
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  const handleInput = ({ target }: any) => {
    router.push(pathname + '?' + createQueryString('name', target.value));
  };

  return (
    <div className="container relative text-white focus-within:text-white w-8/12">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        className="py-2 pr-2 text-md text-white bg-[var(--accent-color)] rounded-[15px] pl-10 focus:outline-none placeholder:text-white"
        placeholder="Search..."
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchInput;
