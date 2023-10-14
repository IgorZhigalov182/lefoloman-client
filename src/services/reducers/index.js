import {
  CHANGE_NAV_TAB,
  GET_BRANCHES_ERRROR,
  GET_BRANCHES_REQUEST,
  GET_BRANCHES_SUCCESS,
  SEARCH_BRANCH,
  TOGGLE_FOOTER,
  SET_DIRECTION,
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  navTab: 'branches',
  branchesRequest: false,
  error: true,
  footer: false,
  direction: null,
  branches: [
    {
      id: 11,
      name: 'ДО «Королевский» Филиала № 7701 Банка ВТБ (ПАО)',
      address: '141070, Московская область, г. Королев, пр-т Космонавтов, д. 33, корп. 1',
      rating: null,
      latitude: 55.910648,
      longitude: 37.867706,
      departments: [
        {
          name: 'openHoursIndividual',
          open_hours: [
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ПОНЕДЕЛЬНИК',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ВТОРНИК',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'СРЕДА',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ЧЕТВЕРГ',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ПЯТНИЦА',
            },
            {
              openAt: '0:00',
              closedAt: '0:00',
              dayOfWeek: 'СУББОТА',
            },
            {
              openAt: '0:00',
              closedAt: '0:00',
              dayOfWeek: 'ВОСКРЕСЕНИЕ',
            },
          ],
        },
      ],
      sale_point_format: null,
      metro_station: null,
      phone_number: null,
    },
    {
      id: 11,
      name: 'ДО «Королевский» Филиала № 7701 Банка ВТБ (ПАО)',
      address: '141070, Московская область, г. Королев, пр-т Космонавтов, д. 33, корп. 1',
      rating: null,
      latitude: 55.910648,
      longitude: 37.867706,
      departments: [
        {
          name: 'openHoursIndividual',
          open_hours: [
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ПОНЕДЕЛЬНИК',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ВТОРНИК',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'СРЕДА',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ЧЕТВЕРГ',
            },
            {
              openAt: '09:00',
              closedAt: '18:00',
              dayOfWeek: 'ПЯТНИЦА',
            },
            {
              openAt: '0:00',
              closedAt: '0:00',
              dayOfWeek: 'СУББОТА',
            },
            {
              openAt: '0:00',
              closedAt: '0:00',
              dayOfWeek: 'ВОСКРЕСЕНИЕ',
            },
          ],
        },
      ],
      sale_point_format: null,
      metro_station: null,
      phone_number: null,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAV_TAB: {
      return {
        ...state,
        navTab: action.navTab,
      };
    }

    case GET_BRANCHES_REQUEST: {
      return {
        ...state,
        branchesRequest: true,
      };
    }

    case GET_BRANCHES_ERRROR: {
      return {
        ...state,
        branchesRequest: false,
        error: true,
      };
    }

    case GET_BRANCHES_SUCCESS: {
      return {
        ...state,
        branchesRequest: false,
        branches: action.branches,
      };
    }

    case SEARCH_BRANCH: {
      const data = state.branches;
      return {
        ...state,
        branches: data,
      };
    }

    case TOGGLE_FOOTER: {
      return {
        ...state,
        footer: !state.footer,
      };
    }

    case SET_DIRECTION: {
      return {
        ...state,
        direction: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  state: reducer,
});
export default rootReducer;
