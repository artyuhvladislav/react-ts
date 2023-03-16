import EpisodeList from '@components/layout/Episode/EpisodeList/EpisodeList';
import Pagination from '@components/Pagination/Pagination';
import SearchInput from '@components/SearchInput/SearchInput';
import ServerData from '@http/fetchData';
import { ROUTES } from '@utils/constants';

const EpisodePage = async (props: any) => {
  const page = Number(props.searchParams.page);
  const searchString = props.searchParams.name ?? '';

  const { episodes, pageCount } = await ServerData.fetchEpisodes(page, searchString);
  return (
    <div className="py-[24px] pb-[32px] px-[24px] pb-[130px]">
      <h2 className="mb-[24px] text-2xl font-title tracking-widest text-[var(--accent-color)] font-medium">
        Episodes
      </h2>
      <SearchInput />
      <EpisodeList episodes={episodes ?? []} />
      <Pagination pageCount={pageCount ?? 0} url={ROUTES.episode} searchParam="name" />
    </div>
  );
};

export default EpisodePage;
