import {
  FETCH_SCHEDULE,
  LOADING_SCHEDULE,
  LOADING_SCHEDULE_COMPLETE,
} from '../types';

const INITIAL_STATE = {
  schedule: [],
  isLoadingSchedule: true,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SCHEDULE:
      return { ...state, schedule: payload };
    case LOADING_SCHEDULE:
      return { ...state, schedule: [], isLoadingSchedule: true };
    case LOADING_SCHEDULE_COMPLETE:
      return { ...state, isLoadingSchedule: false };
    default:
      return state;
  }
};
