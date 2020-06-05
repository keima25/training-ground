import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchScheduledAnime,
  loadingSchedule,
} from '../../store/actions/anime';
import { Tabs } from 'antd';
import moment from 'moment';
import AnimeCard from './AnimeCard';

const { TabPane } = Tabs;
const currentDay = moment().format('dddd').toLowerCase();

function Schedule() {
  const dispatch = useDispatch();
  const isLoadingSchedule = useSelector(
    (state) => state.anime.isLoadingSchedule
  );
  const scheduledAnime = useSelector((state) => state.anime.schedule);
  const content = (
    <AnimeCard data={scheduledAnime} isLoadingSchedule={isLoadingSchedule} />
  );

  useEffect(() => {
    dispatch(loadingSchedule());
    setTimeout(() => {
      dispatch(fetchScheduledAnime(currentDay));
    }, 4000);
  }, [dispatch]);

  function onChange(key) {
    dispatch(loadingSchedule());
    setTimeout(() => {
      dispatch(fetchScheduledAnime(key));
    }, 4000);
  }

  return (
    <div>
      <Tabs
        defaultActiveKey={`${currentDay}`}
        onChange={onChange}
        style={{ textAlign: 'center' }}
      >
        <TabPane tab="Monday" key="monday">
          {content}
        </TabPane>
        <TabPane tab="Tuesday" key="tuesday">
          {content}
        </TabPane>
        <TabPane tab="Wednesday" key="wednesday">
          {content}
        </TabPane>
        <TabPane tab="Thursday" key="thursday">
          {content}
        </TabPane>
        <TabPane tab="Friday" key="friday">
          {content}
        </TabPane>
        <TabPane tab="Saturday" key="saturday">
          {content}
        </TabPane>
        <TabPane tab="Sunday" key="sunday">
          {content}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Schedule;
