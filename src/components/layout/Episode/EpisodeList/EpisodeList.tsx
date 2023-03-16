'use client';

import EpisodeItem from '../EpisodeItem/EpisodeItem';
import { EpisodeListProps } from '../types';

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  const episodeElements = () => {
    return episodes.map((episode) => {
      return <EpisodeItem {...episode} key={episode.id} />;
    });
  };

  return <ul className="grid grid-cols-1 gap-5 mt-[24px] mb-[24px]">{episodeElements()}</ul>;
};

export default EpisodeList;
