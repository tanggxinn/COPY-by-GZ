import React, { Component } from 'react'
import { get } from '../utils/require'
import Headdiv from '../common/component/headdiv'
import Middlediv from '../common/component/middlediv'

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
      </div>
    )
  }
}

export default Demo
