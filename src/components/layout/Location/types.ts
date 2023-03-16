export interface LocationItemProps {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
}

export interface LocationListProps {
    locations: LocationProps[],
}

export interface LocationProps {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}