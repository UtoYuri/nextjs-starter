import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { testAction, testActionAsync } from '../../actions/account';
import { IState } from '../../reducers';
import styles from './Header.less';

interface ICommonHeaderProps {
  title: string;
  token?: number;

  testAction?: any;
  testActionAsync?: any;
}

class CommonHeader extends React.Component<ICommonHeaderProps, {}> {
  render() {
    const { title, token } = this.props;
    const { testAction, testActionAsync } = this.props;

    return (
      <div className={styles.container}>
        in header {title}: {token}
        <div style={{backgroundColor: 'red'}} onClick={testAction}>+1</div>
        <div style={{backgroundColor: 'red'}} onClick={testActionAsync}>async +1</div>
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => {
  const { account: { token } } = state;
  return { token };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    testAction: bindActionCreators(testAction, dispatch),
    testActionAsync: bindActionCreators(testActionAsync, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader)