import {createAction} from 'redux-actions';

import {AppModel} from './models';

import {TOGGLE_SIDE_BAR} from './types';

const toggleSideBar = createAction<AppModel, boolean>(
  TOGGLE_SIDE_BAR,
  (collapsed: boolean) => {return {collapsed}}
);

export {
  toggleSideBar
} 