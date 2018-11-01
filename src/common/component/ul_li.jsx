import React,{Component} from 'react'
import styles from './middlediv.less'

class Ul_li extends Component{
  render(){
    const date = this.props.date;
    const datename = this.props.datename;
    return(
        <div>
            <li className={styles.firstli}>{datename}
              <ul className={styles.second}>
                 {date.map(item=>(<li>{item}</li>))}
              </ul>
            </li>
        </div>
    )
  }
}

export default Ul_li