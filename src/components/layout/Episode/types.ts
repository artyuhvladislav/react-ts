export interface EpisodeItemProps {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
}

export interface EpisodeListProps {
    episodes: EpisodeProps[],
}

export interface EpisodeProps {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}