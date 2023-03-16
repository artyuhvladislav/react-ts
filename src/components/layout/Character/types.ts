export interface CharacterItemProps {
    id: number,
    name: string,
    species: string,
    status: string,
    image: string
}

export interface CharacterListProps {
    characters: CharacterProps[],
}

export interface CharacterProps {

    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string

}