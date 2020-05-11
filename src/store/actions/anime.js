import axios from 'axios';
import { FETCH_SCHEDULE } from '../types';

export function fetchScheduledAnime(day) {
  return async (dispatch) => {
    try {
      const request = await axios
        .get(`/schedule/${day}`)
        .then((res) => res.data);

      dispatch({
        type: FETCH_SCHEDULE,
        payload: request[day],
      });
    } catch (err) {
      console.log('err', err);
    }
  };
}
