import { Search } from '@components/icons';

const SearchInput = () => {
  return (
    <div className="relative text-white focus-within:text-white">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        className="py-2 pr-2 text-md text-white bg-[var(--accent-color)] rounded-[20px] pl-10 focus:outline-none placeholder:text-white"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
