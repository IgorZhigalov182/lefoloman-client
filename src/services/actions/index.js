import { getBranches as getBrancheesAPI } from '../../utils/api';

export const CHANGE_NAV_TAB = 'CNANGE_NAV_TAB';
export const SEARCH_BRANCH = 'SEARCH_BRANCH';
export const GET_BRANCHES_REQUEST = 'GET_BRANCHES_REQUEST';
export const GET_BRANCHES_SUCCESS = 'GET_BRANCHES_SUCCESS';
export const GET_BRANCHES_ERRROR = 'GET_BRANCHES_ERRROR';
export const TOGGLE_FOOTER = 'TOGGLE_FOOTER';

export function getBranches() {
  return function (dispatch) {
    dispatch({
      type: GET_BRANCHES_REQUEST,
    });

    getBrancheesAPI()
      .then((res) => {
        dispatch({
          type: GET_BRANCHES_SUCCESS,
          branches: res.data,
        });
      })
      .catch((e) =>
        dispatch({
          type: GET_BRANCHES_ERRROR,
        }),
      );
  };
}
