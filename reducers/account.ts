import { AccountActions } from '../actions/account';

export interface IAccountState {
  token: number;
}

export interface IAccountReducerAction {
  type: AccountActions;
  payload?: IAccountState;
}

export default (state: IAccountState = {
  token: 0,
}, action: IAccountReducerAction) => {
  switch (action.type) {
    case AccountActions.TEST_ACTION:
      return {
        ...state,
        ...{ token: state.token + 1 }
      };
    default:
      return state;
  }
}