import {
  SAVED_AUTHORIZATION_DATA,
  REMOVED_AUTHORIZATION_DATA
} from 'reducers/authorizationDataReducer';

import { storageAdapter } from 'utils/adapters';

const savedAuthorizationData = userData => ({
  type: SAVED_AUTHORIZATION_DATA,
  userData
});

const removedAuthorizationData = {
  type: REMOVED_AUTHORIZATION_DATA
};

export const copyAuthorizationDataFromStorage = dispatch => {
  const userData = storageAdapter.load('user');
  !!userData ? dispatch(savedAuthorizationData(userData)) : null;
};

export const saveAuthorizationData = userData =>  dispatch => {
  storageAdapter.store('user', userData);
  dispatch(savedAuthorizationData(userData))
}

export const logoutUser = dispatch => {
  storageAdapter.remove('user');
  dispatch(removedAuthorizationData);
};
