import * as React from 'react';

import styles from './Header.less';

class CommonHeader extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.container}>
        Header
      </div>
    )
  }
}

export default CommonHeader;