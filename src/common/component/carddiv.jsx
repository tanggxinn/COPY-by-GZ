import React, { Component } from 'react'
import styles from './carddiv.less'

class Card extends Component{
  render(){
    const cardname = this.props.cardname;
    const summary = this.props.summary;
    return(
      <div className={styles.most}>
        <a href="w">
          <div className={styles.sub}>
            <div className={styles.minimg}>
            <img 
            src="https://dummyimage.com/260x500/333333/cccccc.png" alt=""/>
            </div>
            <div className={styles.autoimg}>
            <img 
            src="https://dummyimage.com/260x500/333333/cccccc.png" alt=""/>
            </div>
            <p className={styles.sum}>{cardname}
              <p>{summary}</p>
            </p>
          </div>
        </a>
      </div>
    )
  }
}

export default Card