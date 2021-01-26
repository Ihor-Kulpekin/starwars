import {handleActions} from 'redux-actions';

import {ActionTypes} from '../constantns/constants';

export const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
};


export default {
  auth: handleActions(
    {
      [ActionTypes.AUTHENTICATE]: (state: any) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state:any, {payload}:any) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state:any) => {
        return {
          ...state,
          sessionKey: null,
          login: null,
          sublogin: null,
        };
      },
      [ActionTypes.LOGOUT]: (state:any) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
    },
    initialState
  ),
};
