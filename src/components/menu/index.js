import React from 'react'
import styles from './index.less'

const Menu = ({ menuData = [] }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ul className={styles.menus}>
          {menuData.map(item => (
            <li className={styles.menu} key={item.key}>
              {item.text}
              {item.children ? (
                <div className={styles.detail}>
                  <ul className={styles.menuChild}>
                    {item.children.map(childrenItem => (
                      <li key={childrenItem.key}>{childrenItem.text}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
