import { combineReducers } from 'redux';
import test, { ITestState } from './test';

export interface IState {
  test: ITestState;
}

export default combineReducers({
  test,
});
