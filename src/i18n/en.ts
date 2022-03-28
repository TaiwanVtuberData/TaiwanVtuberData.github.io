import { Dictionary } from './Dictionary';

const en: Dictionary = {
  header: {
    title: 'Taiwan VTuber Data (Site Under Construction)',
    chooseLanguage: 'Choose language:',
    home: 'Home',
    eventCalendar: 'Event Calendar',
    eventCalendarDetail: '(Provided By Discord Server <b>DD Refuge</b>)',
    allVTubers: 'All VTubers',
    groupList: 'Group List',
    trendingVTubers: 'Trending VTubers',
    trendingVideos: 'Trending Videos',
    growingVTubers: 'Growing VTubers',
    debutVTubers: 'Debut VTubers',
    debutVTubersIn7Days: 'VTubers Debut in 7 days',
    graduateVTubers: 'Graduate VTubers',
    reportIssue: 'Data Posting/Report Issue',
    about: 'About The Site',
    group: 'Group',
    memberList: 'Members',
    top10: 'Top 10',
    YouTubeSubPlusTwitchFollowers: 'YouTube Subscribers + Twitch Followers',
    statisticUpdateTime: 'Statistic update time:',
    VTuberDataUpdateTime: 'VTuber data update time:',
  },
  table: {
    displayName: 'Name',
    links: 'Links',
    YouTubeSubscriberCount: 'YouTube Subscribers',
    TwitchFollowerCount: 'Twitch Followers',
    group: 'Group',
    nationality: 'Nationality',
    title: 'Title',
    video: 'Video',
    viewCount: 'View Count',
    uploadTime: 'Upload Time',
    hiddenCount: 'hidden',
    searchByDisplayName: 'Search by name',
    searchByGroup: 'Search by group',
    searchByGroupMember: 'Search by group member',
    searchByDate: 'Search by date',
    searchByTitle: 'Search by title',
    loading: 'Loading...',
    popularity: 'Popularity',
    averageSubscriberCount: 'Average Subscribers',
    totalSubscriberCount: 'Total Subscribers',
    memberCount: 'Member Count',
    memberList: 'Members',
    debutDate: 'Debut Date',
    graduateDate: 'Graduation Date',
    _7DaysGrowth: '7 Days Growth (Percent)',
    _30DaysGrowth: '30 Days Growth (Percent)',
    atLeast: 'at least',
    noRecord: 'no record',
    noDuplicate: 'One video per VTuber',
    allVideos: 'All videos',
    options: 'Options:',
    popularVideo: 'Popular Video',
    paginationOptions: {
      noRowsPerPage: false,
      rowsPerPageText: 'Rows per page',
      rangeSeparatorText: 'of',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'All',
    },
  },
  text: {
    reportUsingGoogleForm: 'Report using Google Form',
    reportUsingGitHub: 'Report using GitHub',
    showVideo: 'show video',
  },
  toolTip: {
    eventCalendar: 'The calendar is not maintained by the site owner',
    trendingVTubers:
      'Popularity: Median views of YouTube uploads within 30 days + Median views of Twitch streams within 30 days',
    growingVTubers:
      'Only showing VTubers with YouTube subscribers growth over 100 within 7 days',
    debutVTubers: 'Only showing VTubers debut/about to debut in 30 days',
    graduateVTubers:
      'Only showing VTubers graduated/about to graduate in 30 days',
    groupList:
      "Popularity: All channels'median views of YouTube uploads within 30 days + Median views of Twitch streams within 30 days",
  },
  termsOfService: {
    termsOfService: 'Terms Of Service',
    lastUpdated: 'Last Updated: 2021/12/31',
    line1: `臺灣 VTuber 列表 ("The site") uses <a href="https://developers.google.com/youtube" text-decoration="none" target="_blank" rel="noopener noreferrer">YouTube API Services</a> to keep recorded VTuber YouTube channels data up-to-date.`,
    line2: 'The data collected are as followed:',
    YouTubeBulletPoint1: 'Channel subscribers count',
    YouTubeBulletPoint2:
      'Channel subscribers count difference in last 7 days / 30 days',
    YouTubeBulletPoint3: 'Channel median video view count in last 30 days',
    YouTubeBulletPoint4: 'Channel highest viewed video in last 30 days',
    line3: `By using this site, you hereby agreed to be bound by <a href="https://www.youtube.com/t/terms" text-decoration="none" target="_blank" rel="noopener noreferrer">YouTube Terms Of Service</a>.`,
    line4: `The site uses <a href="https://dev.twitch.tv/docs/api/" text-decoration="none" target="_blank" rel="noopener noreferrer">Twitch API</a> to keep recorded VTuber Twitch channels data up-to-date.`,
    TwitchBulletPoint1: 'Channel followers count',
    TwitchBulletPoint2:
      'Channel median past broadcast view count in last 30 days',
    TwitchBulletPoint3: 'Channel highest viewed past broadcast in last 30 days',
  },
  privacyPolicy: {
    privacyPolicy: 'Privacy Policy',
    lastUpdated: 'Last Updated: 2022/03/22',
    bulletPoint1: `The site does not ask for or collect user's personal data. However, it could not guarantee that the site's web hosting provider(GitHub) does not collect user's personal data.`,
    bulletPoint2: `The site only store user's language setting as cookie; and does not use any other cookies or similar technology to track user's usage record. However, it could not guarantee that the embedded Google Calendar, YouTube videos, or Twitch videos do not track user's usage record.`,
    referToGoogle: `Refer to Google Privacy Policy: <a href="http://www.google.com/policies/privacy" text-decoration="none" target="_blank" rel="noopener noreferrer">http://www.google.com/policies/privacy</a>.`,
    bulletPoint3: `The site could not guarantee that the external sites it linked to do not collect user's personal data.`,
  },
  technicalDetails: {
    technicalDetails: 'Technical Details',
    bulletPoint1: `Data source: <a href="https://github.com/TaiwanVtuberData/TaiwanVtuberTrackingData" target="_blank" rel="noopener noreferrer">https://github.com/TaiwanVtuberData/TaiwanVtuberTrackingData</a>`,
    bulletPoint2: 'Data update time: Every day at 05:55 UTC+8',
    bulletPoint3: `Site source code: <a href="https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io" target="_blank" rel="noopener noreferrer">https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io</a>`,
  },
  scroll: {
    top: 'To Top',
    bottom: 'To Bottom',
  },
  notFound: {
    title: 'Error',
    detail: 'This page does not exists.',
    goHome: 'Go back to home page.',
  },
} as const;

export default en;
