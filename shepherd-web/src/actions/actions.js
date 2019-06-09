import * as types from './actionTypes';
import {
  getAllClients,
  addNewClient,
  fetchEndPoints,
  createEndPoint,
  updateEndPoint,
  executeEndPoint,
  getExecutions
} from '../service/service';

function url() {
  return 'www.url.com';
}

export function receiveClients(data) {
  return { type: types.FETCH_CLIENTS_SUCCESS, clients: data };
}

export function newClientAdded(data) {
  return { type: types.ADD_CLIENT_SUCCESS, client: data };
}

export function fetchClients() {
  return dispatch => {
    return getAllClients().then(data => dispatch(receiveClients(data)));
  };
}

export function addClient(clientName) {
  return dispatch => {
    return addNewClient(clientName).then(data => dispatch(newClientAdded(data)));
  };
}
