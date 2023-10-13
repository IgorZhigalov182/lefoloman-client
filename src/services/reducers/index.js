import { CHANGE_NAV_TAB } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    navTab: 'branches',
    branches: [{
        "id": 11,
        "name": "ДО «Королевский» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141070, Московская область, г. Королев, пр-т Космонавтов, д. 33, корп. 1",
        "rating": null,
        "latitude": 55.910648,
        "longitude": 37.867706,
        "departments": [
            {
                "name": "openHoursIndividual",
                "open_hours": [
                    {
                        "openAt": "09:00",
                        "closedAt": "18:00",
                        "dayOfWeek": "ПОНЕДЕЛЬНИК"
                    },
                    {
                        "openAt": "09:00",
                        "closedAt": "18:00",
                        "dayOfWeek": "ВТОРНИК"
                    },
                    {
                        "openAt": "09:00",
                        "closedAt": "18:00",
                        "dayOfWeek": "СРЕДА"
                    },
                    {
                        "openAt": "09:00",
                        "closedAt": "18:00",
                        "dayOfWeek": "ЧЕТВЕРГ"
                    },
                    {
                        "openAt": "09:00",
                        "closedAt": "18:00",
                        "dayOfWeek": "ПЯТНИЦА"
                    },
                    {
                        "openAt": "0:00",
                        "closedAt": "0:00",
                        "dayOfWeek": "СУББОТА"
                    },
                    {
                        "openAt": "0:00",
                        "closedAt": "0:00",
                        "dayOfWeek": "ВОСКРЕСЕНИЕ"
                    }
                ]
            }
        ],
        "sale_point_format": null,
        "metro_station": null,
        "phone_number": null
    }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAV_TAB: {
            return {
                ...state,
                navTab: action.navTab
            }
        }

        default: {
            return state;
        }
    }
}


const rootReducer = combineReducers({
    state: reducer,
});
export default rootReducer;