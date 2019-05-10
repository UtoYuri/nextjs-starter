import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { testAction, testActionAsync } from '../../redux/actions/test';
import { IState } from '../../redux/reducers';
import styles from './Home.less';

interface IHomeProps {
  number?: number;

  testAction?: any;
  testActionAsync?: any;
}

class Home extends React.Component<IHomeProps, {}> {
  render() {
    const { number } = this.props;
    const { testAction, testActionAsync } = this.props;

    return (
      <div className={styles.container}>
        Home
        <div>number: {number}</div>
        <button onClick={testAction}>+1</button>
        <button onClick={testActionAsync}>async +1</button>
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => {
  const { test: { number } } = state;
  return { number };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    testAction: bindActionCreators(testAction, dispatch),
    testActionAsync: bindActionCreators(testActionAsync, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)