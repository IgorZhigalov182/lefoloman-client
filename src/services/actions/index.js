import { getBranches as getBrancheesAPI,
         getFilteredBranches as getFilteredBranchesAPI
} from '../../utils/api';

export const CHANGE_NAV_TAB = 'CNANGE_NAV_TAB';
export const SEARCH_BRANCH = 'SEARCH_BRANCH';
export const GET_BRANCHES_REQUEST = 'GET_BRANCHES_REQUEST';
export const GET_BRANCHES_SUCCESS = 'GET_BRANCHES_SUCCESS';
export const GET_BRANCHES_ERRROR = 'GET_BRANCHES_ERRROR';
export const TOGGLE_FOOTER = 'TOGGLE_FOOTER';
export const SET_DIRECTION = 'SET_DIRECTION';
export const CHANGE_SIDEBAR_TYPE = 'CHANGE_SIDEBAR_TYPE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_FILTERED_BRANCHES = 'GET_FILTERED_BRANCHES';

export function getBranches() {
  return function (dispatch) {
    dispatch({
      type: GET_BRANCHES_REQUEST,
    });

    getBrancheesAPI()
      .then((res) => {
        dispatch({
          type: GET_BRANCHES_SUCCESS,
          branches: res.banks,
        });
      })
      .catch((e) =>
        dispatch({
          type: GET_BRANCHES_ERRROR,
        }),
      );
  };
}

export function getFilteredBranches(filters) {
    return function (dispatch) {
        getFilteredBranchesAPI(filters)
            .then(res => {
                dispatch({
                    type: GET_FILTERED_BRANCHES,
                    branches: res.banks
                })
            });
    }
}