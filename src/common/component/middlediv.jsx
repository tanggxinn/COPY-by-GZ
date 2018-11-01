import React, { Component } from 'react'
import styles from './middlediv.less'

class Middlediv extends Component{
  render(){
    return(
      <nav className={styles.bar}>
          <ul className={styles.first}>
            <li className={styles.firstli}>抽血检查项目
              <ul className={styles.second}>
                <li>血常规</li>
                <li>血生化（肝肾功能）</li>
                <li>激素六项</li>
                <li>免疫蛋白电泳</li>
              </ul>
            </li>
            <li className={styles.firstli}>拍片项目
              <ul className={styles.second}>
                <li>X光片</li>
                <li>CT</li>
                <li>增强CT</li>
                <li>核磁共振</li>
                <li>B超</li>
              </ul>
            </li>
            <li className={styles.firstli}>其他项目
              <ul className={styles.second}>
                <li>骨穿</li>
                <li>血液肿瘤免疫残留</li>
                <li>骨密度</li>
              </ul>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Middlediv