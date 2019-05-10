import { combineReducers } from 'redux';
import account, { IAccountState } from './account';

export interface IState {
  account: IAccountState;
};

export default combineReducers({
  account
})