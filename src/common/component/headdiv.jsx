import React, { Component } from 'react'
import styles from './headdiv.less'



class Headdiv extends Component {
  
  render() {

    return (
      <div className={styles.mcmc} >
        <div className={styles.main}>
          <h1>我的健康记录</h1>
          <p>使用指南：请点击下面对应的卡片，录入已有的医院检查结果。</p>
          <a href="https://github.com/tanggxinn/Code" >
            <div className={styles.introduce}>
              <img src="./img/github.png" alt=""/>
              <p className={styles.notim}>联系作者</p>
            </div>
          </a>
        </div>
      </div>
    )

  }

}

export default Headdiv
