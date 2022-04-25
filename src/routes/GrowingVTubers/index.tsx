import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import {
  GrowthDisplayData,
  VTuberGrowthDisplayData,
} from '../../types/TableDisplayData/VTuberGrowthDisplayData';
import { VTuberGrowthData } from '../../types/ApiData/VTuberGrowthData';
import { GrowthData } from '../../types/Common/GrowthData';
import { _30DaysGrowthSort, _7DaysGrowthSort } from '../../utils/GrowthSort';
import { GrowthDisplayDataToString } from '../../utils/NumberUtils';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { NameColumn } from '../../tableTypes/NameColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';

export interface GrowingVTubersPageProps {
  dictionary: Dictionary;
}

const GrowingVTubersPage: FunctionalComponent<GrowingVTubersPageProps> = (
  props: GrowingVTubersPageProps
) => {
  document.title = `${props.dictionary.header.growingVTubers} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberGrowthDisplayData>> = [
    {
      ...NameColumn<VTuberGrowthDisplayData>(),
      compact: true,
    },
    {
      name: <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>,
      selector: (row: { YouTubeSubscriberCount: number }): number =>
        row.YouTubeSubscriberCount,
      compact: true,
      right: true,
      sortable: true,
    },
    {
      name: <Text id="table._7DaysGrowth">7 Days Growth (Percent)</Text>,
      sortFunction: _7DaysGrowthSort,
      cell: (row: { _7DaysGrowth: GrowthDisplayData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
      compact: true,
      right: true,
      sortable: true,
      width: '150px',
      maxWidth: '250px',
    },
    {
      name: <Text id="table._30DaysGrowth">30 Days Growth (Percent)</Text>,
      cell: (row: { _30DaysGrowth: GrowthDisplayData }): string =>
        GrowthDisplayDataToString(row._30DaysGrowth, props.dictionary.table),
      sortFunction: _30DaysGrowthSort,
      compact: true,
      right: true,
      sortable: true,
      width: '150px',
      maxWidth: '250px',
    },
    {
      ...PopularVideoColumn(),
      width: '100px',
    },
    {
      ...GroupColumn(),
      compact: true,
      maxWidth: '100px',
    },
    {
      ...NationalityColumn(),
      compact: true,
      minWidth: '25px',
      maxWidth: '100px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberGrowthDisplayData>>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((item) => {
      if (item.group === undefined) return true;
      return item.group.toLowerCase().includes(filterGroup.toLowerCase());
    });

  const searchBarComponent = useMemo(() => {
    const handleClearName = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName('');
      }
    };

    const handleClearGroup = (): void => {
      if (filterGroup) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterGroup('');
      }
    };

    return (
      <div class={tableStyle.searchBarGroup}>
        <SearchBar
          placeholderText={props.dictionary.table.searchByDisplayName}
          onFilter={(e: any): void => setFilterName(e.target.value)}
          onClear={handleClearName}
          filterText={filterName}
        />
        <SearchBar
          placeholderText={props.dictionary.table.searchByGroup}
          onFilter={(e: any): void => setFilterGroup(e.target.value)}
          onClear={handleClearGroup}
          filterText={filterGroup}
        />
      </div>
    );
  }, [filterName, filterGroup, resetPaginationToggle, props.dictionary]);

  const growthDataToDisplayData = (
    e: GrowthData,
    subCount?: number
  ): GrowthDisplayData => ({
    ...e,
    percentage:
      subCount !== undefined && subCount !== 0 ? e.diff / subCount : 0,
  });

  const dataToDisplayData = (e: VTuberGrowthData): VTuberGrowthDisplayData => ({
    id: e.id,
    name: e.name,
    imgUrl: e.imgUrl,
    YouTubeId: e.YouTube.id,
    TwitchId: e.Twitch?.id,
    YouTubeSubscriberCount: e.YouTube.subscriberCount ?? 0,
    _7DaysGrowth: growthDataToDisplayData(
      e.YouTube._7DaysGrowth,
      e.YouTube.subscriberCount
    ),
    _30DaysGrowth: growthDataToDisplayData(
      e.YouTube._30DaysGrowth,
      e.YouTube.subscriberCount
    ),
    popularVideo: e.popularVideo,
    group: e.group ?? '',
    nationality: e.nationality,
    activity: e.activity,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGrowingVTubers('100').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e) => dataToDisplayData(e))
          .sort((a, b) => b._7DaysGrowth.percentage - a._7DaysGrowth.percentage)
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h1>
        <Text id="header.growingVTubers">Growing VTubers</Text>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.growingVTubers">tooltip text</Text>}
        />
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        conditionalRowStyles={ActivityRowStyles}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default GrowingVTubersPage;
