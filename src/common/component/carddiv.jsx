import React, { Component } from 'react'
import styles from './carddiv.less'

class Card extends Component{
  render(){
    return(
      <div className={styles.most}>
        <a href="w">
          <div className={styles.newimg}>
            <img src="https://dummyimage.com/160x160/eeeeee/cccccc.png" alt=""/>
          </div>
        </a>
      </div>
    )
  }
}

export default Card