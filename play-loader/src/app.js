import React from 'react';
import IMG from '../imgs/00.jpg';
import txt from './wangyong.txt';

import styles from './index.module.less';

export default function App() {
  return (
    <div className={styles.box}>
      <img src={IMG} alt="logo" />
      {txt}
    </div>
  );
}
