import * as types from '../constants';

const initialState = {
  isFetching: false,
  reportStartDate: '',
  reportEndDate: '',
  reports: [],
};

function reports(state = initialState, action) {
  // Handle actions
  switch (action.type) {
    case types.FETCHING_COMPLETE:
      return {
        ...state,
        isFetching: false,
      };
    case types.IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case types.ON_CHANGE_REPORT_END_DATE:
      return {
        ...state,
        reportEndDate: action.reportEndDate,
      };
    case types.ON_CHANGE_REPORT_START_DATE:
      return {
        ...state,
        reportStartDate: action.reportStartDate,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reports;
