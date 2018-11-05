import React, { Component } from 'react'
import { get } from '../utils/require'
import Headdiv from '../common/component/headdiv'
import Middlediv from '../common/component/middlediv'
import Maindiv from '../common/component/maindiv';

class Demo extends Component {
  componentDidMount() {
    get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <Headdiv />
        <Middlediv />
        <Maindiv />
      </div>
    )
  }
}

export default Demo
