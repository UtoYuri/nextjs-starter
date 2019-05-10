export enum TestActions {
  TEST_ACTION = 'TEST_ACTION',
}

export const testAction = () => (dispatch: any) => {
  return dispatch({
    type: TestActions.TEST_ACTION,
  });
};

export const testActionAsync = () => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(testAction());
    }, 2000);
  };
};
