import React, { Component } from 'react'
import styles from './middlediv.less'
import Ul_li from './ul_li'

let mcmc1=["血常规","血生化（肝肾功能）","激素六项","免疫蛋白电泳"]
let mcmc2=["X光片","CT","增强CT","核磁共振","B超"]
let mcmc3=["骨穿","血液肿瘤免疫残留","骨密度","+"]

class Middlediv extends Component{
  render(){
    return(
      <nav className={styles.bar}>
          <ul className={styles.first}>
              <Ul_li date = {mcmc1} datename= "抽血检查项目" />
              <Ul_li date = {mcmc2} datename= "拍片检查项目" />
              <Ul_li date = {mcmc3} datename= "其他检查项目" />
          </ul>
      </nav>
    )
  }
}

export default Middlediv