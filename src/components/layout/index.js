import React from 'react'
import styles from './index.less'

import Header from '../header'
import Menu from '../menu'

const menuData = [
  {
    key: '100',
    text: '抽血检查项目',
    children: [{ key: '110', text: '子菜单A' }, { key: '120', text: '子菜单B' }]
  },
  {
    key: '200',
    text: '拍片检查项目',
    children: [{ key: '210', text: '子菜单A' }]
  },
  {
    key: '300',
    text: '其他检查项目',
    children: [{ key: '310', text: '子菜单A' }, { key: '320', text: '子菜单B' }]
  }
]

const Container = props => {
  const { children } = props
  return (
    <div className={styles.root}>
      <Header />
      <Menu menuData={menuData} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Container
