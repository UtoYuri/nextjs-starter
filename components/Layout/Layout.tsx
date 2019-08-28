import * as React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.less';

interface ILayoutProps {
  children?: any;
}

class Layout extends React.Component<ILayoutProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layout}>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
