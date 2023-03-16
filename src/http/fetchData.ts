import { getCharacters, getEpisodes, getLocations } from "rickmortyapi";


class ServerData {
    fetchCharacters = async (page: number, searchString: string) => {
        const { data } = await getCharacters({ page, name: searchString });
        return { pageCount: data.info?.pages, characters: data.results };
    }

    fetchLocations = async (page: number, searchString: string) => {
        const { data } = await getLocations({ page, type: searchString });
        return { pageCount: data.info?.pages, locations: data.results };
    }

    fetchEpisodes = async (page: number, searchString: string) => {
        const { data } = await getEpisodes({ page, episode: searchString });
        return { pageCount: data.info?.pages, episodes: data.results };
    }
}

export default new ServerData()