import { ActionTypes } from 'constantns/constants';
import { PeopleStateType } from 'types/peopleTypes';

const initialState: PeopleStateType = {
  people: [],
  loading: false,
  error: false,
  count: 0,
  next: '',
  previous: ''
};

export default function people(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_PEOPLE: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ActionTypes.GET_PEOPLE_SUCCESS: {
      const { people, count, previous, next } = action;
      return {
        ...state,
        loading: false,
        people: people,
        error: false,
        count,
        previous,
        next
      };
    }
    case ActionTypes.GET_PEOPLE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return {
        ...state
      };
  }
}
