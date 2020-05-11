import { FETCH_SCHEDULE } from '../types';

const INITIAL_STATE = {
  schedule: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SCHEDULE:
      return { ...state, schedule: payload };
    default:
      return state;
  }
};
