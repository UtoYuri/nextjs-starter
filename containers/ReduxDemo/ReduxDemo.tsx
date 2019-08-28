import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';

import { testAction, testActionAsync } from '../../redux/actions/test';
import { IState } from '../../redux/reducers';
import styles from './ReduxDemo.less';

interface IReduxDemoProps {
  number?: number;

  testAction?: any;
  testActionAsync?: any;
}

class ReduxDemo extends React.Component<IReduxDemoProps, {}> {
  render() {
    const { number } = this.props;
    const { testAction, testActionAsync } = this.props;

    return (
      <div className={styles.container}>
        ReduxDemo
        <div>number: {number}</div>
        <Button onClick={testAction}>+1</Button>
        <Button onClick={testActionAsync}>async +1</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const {
    test: { number },
  } = state;
  return { number };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    testAction: bindActionCreators(testAction, dispatch),
    testActionAsync: bindActionCreators(testActionAsync, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxDemo);
