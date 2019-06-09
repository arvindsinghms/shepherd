import initialState from './initialState';
import {
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS,
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILURE
} from '../actions/actionTypes';

export default function loading(state = initialState.isLoading, action) {
  switch (action.type) {
    case FETCH_CLIENTS_REQUEST:
    case ADD_CLIENT_REQUEST:
      return true;
    case FETCH_CLIENTS_SUCCESS:
    case ADD_CLIENT_SUCCESS:
    case ADD_CLIENT_FAILURE:
      return false;
    default:
      return state;
  }
}
