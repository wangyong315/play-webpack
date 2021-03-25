import React from "react";

import IMG from '../imgs/00.jpg'

import styles from './index.module.less';

export default function App(params) {
  return (
    <div className={styles.box}>
      <img src={IMG} />
    </div>
  )
}
