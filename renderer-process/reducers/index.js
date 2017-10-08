import {
  TOGGLE_LOADER,
  TOGGLE_MAIN_LOADER,
  SET_PACKAGES,
  SET_ACTIVE,
  SET_ACTIVE_PAGE,
  SET_MODE
} from '../constants/ActionTypes';
import initialState from './initialState';

export default function packagesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case TOGGLE_MAIN_LOADER:
      return Object.assign({}, state, {
        package_loading: action.package_loading
      });
    case SET_PACKAGES:
      return Object.assign({}, state, {
        packages: action.packages,
        active: null
      });
    case SET_ACTIVE:
      return Object.assign({}, state, {
        active: action.active
      });
    case SET_ACTIVE_PAGE:
      return Object.assign({}, state, {
        activePage: action.activePage
      });
    case SET_MODE:
      return Object.assign({}, state, {
        mode: action.mode,
        modeActions: action.modeActions,
        active: null,
        activePage: null
      });
    default:
      return state;
  }
}