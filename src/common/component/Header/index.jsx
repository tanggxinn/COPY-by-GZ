import React from "react";
import styles from "./index.less";

export default function Header (props) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h1>健康记录</h1>
        <p>
          在这里可以录入您所有的检查结果、诊断书和病例，
          <br/>
          方便以后查询和观察了解自己的健康状况。
        </p>
      </div>
      <div className={styles.right}>
        <a href="https://github.com/tanggxinn">
          <div className={styles.github}>
            <img src="./logo.png" alt=""/>
            <p className={styles.callme}>
              联系作者
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}