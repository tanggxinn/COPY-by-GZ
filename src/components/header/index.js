import React from 'react'
import styles from './index.less'

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>我的健康记录</p>
          <p className={styles.info}>
            使用指南：请点击下面对应的卡片，录入已有的医院检查结果。
          </p>
        </div>
        <div className={styles.action}>
          <div className={styles.item}>
            <img src="./img/github.png" alt="" />
            <p>联系作者</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
