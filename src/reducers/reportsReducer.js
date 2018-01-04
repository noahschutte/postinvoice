import * as types from '../constants';

const initialState = {
  reports: [],
};

function reports(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}

export default reports;
