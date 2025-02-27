import { VTuberData } from '../../types/ApiData/VTuberData';
import { DebutInfo } from '../../types/DebutInfo';
import { VTuberDisplayData } from '../../types/TableDisplayData/VTuberDisplayData';
import { getDebutDate } from '../DebutInfoUtils';
import { maybeDebutStringToDebutInfo } from './DebutStringToDebutInfo';

export const VTuberBasicToDisplay = (e: VTuberData): VTuberDisplayData => {
  const debutInfo: DebutInfo = maybeDebutStringToDebutInfo(e.debutDate);

  return {
    id: e.id,
    activity: e.activity,
    name: e.name,
    imgUrl: e.imgUrl,
    YouTubeId: e.YouTube?.id || null,
    YouTubeSubscriber: e.YouTube?.subscriber || null,
    TwitchId: e.Twitch?.id || null,
    TwitchFollower: e.Twitch?.follower || null,
    popularVideo: e.popularVideo,
    group: e.group,
    nationality: e.nationality,
    debutInfo: debutInfo,
    debutDate: getDebutDate(debutInfo),
  };
};
