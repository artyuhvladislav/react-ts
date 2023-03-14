const Home = async () => {
  return (
    <div className="pl-[200px] pt-[64px]">
      {/* <img src="/images/rick-and-morty-31006.png" alt="rick and Morty" className="w-6/12" /> */}
      <h1 className="text-[var(--accent-color)] text-[30px] font-title mb-[48px] tracking-widest">
        The application was build with next.js 13
      </h1>
      <p className="text-[var(--accent-color)] text-lg max-w-[30%] font-text mb-[64px]">
        Rick and Morty is an American adult animated science-fiction sitcom created by Justin
        Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is
        distributed internationally by Warner Bros.
      </p>
      <a
        className="block max-w-[200px] text-center bg-[var(--second-accent-color)] text-white py-4 mt-[64px] px-10 rounded-[20px] font-title text-lg tracking-widest"
        href="#">
        GITHUB CODE
      </a>
    </div>
  );
};

export default Home;
