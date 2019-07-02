import {handleActions} from 'redux-actions';
import {TOGGLE_SIDE_BAR} from './types';
import {AppModel} from './models'

// 初始的状态,就像react中组件内的初始状态，只不过这个是全局的。
const initialState: AppModel = {
  collapsed:false
};

// export const toggleSideBarReducer = handleActions<AppModel>({
//      [TOGGLE_SIDE_BAR]: (state: any, action: any) => {
//       //  console.log('reducer->state:', state);
//       //  console.log('reducer->action:', action);
//        return {collapsed:true};
//    },
// }, initialState);

export const toggleSideBarReducer = handleActions<AppModel>({
  [TOGGLE_SIDE_BAR]: (state:any, action:any) => {
    return {
      ...state,
      collapsed: !state.collapsed
    }
  }
}, initialState);