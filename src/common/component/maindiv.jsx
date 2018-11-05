import React, { Component } from 'react'
import Card from './carddiv';
import styles from './maindiv.less';

class Maindiv extends Component {
  render() {
    return (
      <div className={styles.back}>
        <div className={styles.card}>
          <Card 
          cardname="最新提交检查" 
          summary="这里是最新提交的检查结果，
          鼠标悬停可见上传检查图片的原图，
          点击进入查看详情。" 
          />
          <Card 
          cardname="血常规" 
          summary="血常规是指通过观察血细胞的数量变化
          及形态分布从而判断血液状况及疾病的检查。" 
          />
          <Card 
          cardname="血生化" 
          summary="检测存在于血液中的各种离子、糖类、
          脂类、蛋白质以及各种酶、激素
          和机体的多种代谢产物的含量。" 
          />
          <Card 
          cardname="激素六项" 
          summary="通过测定性激素水平来了解女性内分泌功能
          和诊断与内分泌失调相关的疾病。" 
          />
        </div>
      </div>
    )
  }
}

export default Maindiv