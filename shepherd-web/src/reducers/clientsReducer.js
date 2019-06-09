import initialState from './initialState';
import { FETCH_CLIENTS_SUCCESS, ADD_CLIENT_SUCCESS } from '../actions/actionTypes';

export default function stuff(state = initialState.clients, action) {
  let newState;
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      newState = action.clients;
      return newState;
    case ADD_CLIENT_SUCCESS:
      debugger;
      newState = [...state, action.client];
      return newState;
    default:
      return state;
  }
}
