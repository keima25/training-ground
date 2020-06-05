import axios from 'axios';
import {
  FETCH_SCHEDULE,
  LOADING_SCHEDULE,
  LOADING_SCHEDULE_COMPLETE,
} from '../types';

export function fetchScheduledAnime(day) {
  return async (dispatch) => {
    try {
      const request = await axios
        .get(`/schedule/${day}`)
        .then((res) => res.data);

      dispatch(loadingScheduleComplete());
      dispatch({
        type: FETCH_SCHEDULE,
        payload: request[day],
      });
    } catch (err) {
      console.log('err', err);
    }
  };
}

export const loadingSchedule = () => ({
  type: LOADING_SCHEDULE,
});

export const loadingScheduleComplete = () => ({
  type: LOADING_SCHEDULE_COMPLETE,
});
