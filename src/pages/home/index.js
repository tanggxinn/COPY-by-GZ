import React, { Component } from 'react'
import Layout from '../../components/layout'
import styles from './index.less'

const itemData = [
  {
    key: '001',
    imgMini: 'http://placehold.jp/230x200.png',
    img: 'http://placehold.jp/99ccff/003366/430x400.png',
    title: '最新的检查提交',
    text:
      '这里是最新提交的检查结果，鼠标悬停可见上传检查图片的原因，点击进入详情'
  },
  {
    key: '002',
    imgMini: 'http://placehold.jp/230x200.png',
    img: 'http://placehold.jp/99ccff/003366/430x400.png',
    title: '最新的检查提交',
    text:
      '这里是最新提交的检查结果，鼠标悬停可见上传检查图片的原因，点击进入详情'
  },
  {
    key: '003',
    imgMini: 'http://placehold.jp/230x200.png',
    img: 'http://placehold.jp/99ccff/003366/430x400.png',
    title: '最新的检查提交',
    text:
      '这里是最新提交的检查结果，鼠标悬停可见上传检查图片的原因，点击进入详情'
  },
  {
    key: '004',
    imgMini: 'http://placehold.jp/230x200.png',
    img: 'http://placehold.jp/99ccff/003366/430x400.png',
    title: '最新的检查提交',
    text:
      '这里是最新提交的检查结果，鼠标悬停可见上传检查图片的原因，点击进入详情'
  },
  {
    key: '005',
    imgMini: 'http://placehold.jp/230x200.png',
    img: 'http://placehold.jp/99ccff/003366/430x400.png',
    title: '最新的检查提交',
    text:
      '这里是最新提交的检查结果，鼠标悬停可见上传检查图片的原因，点击进入详情'
  }
]

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.root}>
          <div className={styles.container}>
            {itemData.map(item => (
              <div className={styles.item} key={item.key}>
                <div className={styles.img}>
                  <img src={item.imgMini} alt="" />
                  <div className={styles.detail}>
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className={styles.info}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomePage
