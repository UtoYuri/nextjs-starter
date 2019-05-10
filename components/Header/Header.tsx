import * as React from 'react';
import Head from 'next/head';

import styles from './Header.less';

class CommonHeader extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Title</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/static/styles/antd.min.css' />
        </Head>
        Header
      </div>
    );
  }
}

export default CommonHeader;
