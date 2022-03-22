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
    graduateVTubers: 'Graduate VTubers',
    reportIssue: 'Data Posting/Report Issue',
    about: 'About The Site',
    group: 'Group',
    memberList: 'Members',
    top10: 'Top 10',
    YouTubeSubPlusTwitchFollowers: 'YouTube Subscribers + Twitch Followers',
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
  },
} as const;

export default en;
