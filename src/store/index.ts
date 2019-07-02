import { AppModel } from './models';
import { combineReducers } from 'redux';
import { toggleSideBarReducer } from './reducers';
import { Store, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {History} from 'history';
interface RootState {
  app: AppModel;
}
const rootReducer = combineReducers({
  app: toggleSideBarReducer
});
export function store(initialState?: RootState): Store<RootState> {

  // store 中间件，根据个人需求添加
  const middleware = applyMiddleware(thunkMiddleware)

  return createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RootState>;
}