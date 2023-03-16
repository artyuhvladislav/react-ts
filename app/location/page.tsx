import LocationList from '@components/layout/Location/LocationList/LocationList';
import Pagination from '@components/Pagination/Pagination';
import SearchInput from '@components/SearchInput/SearchInput';
import ServerData from '@http/fetchData';
import { ROUTES } from '@utils/constants';

const LocationsPage = async (props: any) => {
  const page = Number(props.searchParams.page);
  const searchString = props.searchParams.name ?? '';

  const { locations, pageCount } = await ServerData.fetchLocations(page, searchString);
  return (
    <div className="py-[24px] pb-[32px] px-[24px] pb-[130px]">
      <h2 className="mb-[24px] text-2xl font-title tracking-widest text-[var(--accent-color)] font-medium">
        Locations
      </h2>
      <SearchInput />
      <LocationList locations={locations ?? []} />
      <Pagination pageCount={pageCount ?? 0} url={ROUTES.location} searchParam="name" />
    </div>
  );
};

export default LocationsPage;
