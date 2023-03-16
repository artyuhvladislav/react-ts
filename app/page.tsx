const Home = async () => {
  return (
    <div className="px-5 pt-[32px] pb-[130px]">
      <h1 className="text-[var(--accent-color)] text-[30px] font-title mb-[24px] tracking-widest">
        The application was build with next.js 13
      </h1>
      <div className="flex flex-col">
        <p className="text-[var(--accent-color)] text-lg font-text mb-[16px]">
          Rick and Morty is an American adult animated science-fiction sitcom created by Justin
          Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.
        </p>
        <p className="text-[var(--accent-color)] text-lg font-text">
          Rick and Morty is an American adult animated science-fiction sitcom created by Justin
          Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.
        </p>
        <img src="/images/home.png" alt="rick and Morty" className="w-8/12 container" />
      </div>

      <a
        className="block max-w-[200px] text-center bg-[var(--second-accent-color)] text-white py-4 px-10 rounded-[20px] font-title text-lg tracking-widest"
        href="#">
        GITHUB CODE
      </a>
    </div>
  );
};

export default Home;
