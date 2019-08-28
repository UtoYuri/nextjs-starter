import { TestActions } from '../actions/test';

export interface ITestState {
  number: number;
}

export interface ITestReducerAction {
  type: TestActions;
  payload?: ITestState;
}

export default (
  state: ITestState = {
    number: 0,
  },
  action: ITestReducerAction,
) => {
  switch (action.type) {
    case TestActions.TEST_ACTION:
      return {
        ...state,
        ...{ number: state.number + 1 },
      };
    default:
      return state;
  }
};
