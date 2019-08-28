import * as React from 'react';
import ReduxDemo from '../../containers/ReduxDemo/ReduxDemo';

import styles from './Home.less';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.container}>
        Home
        <ReduxDemo />
      </div>
    );
  }
}

export default Home;
