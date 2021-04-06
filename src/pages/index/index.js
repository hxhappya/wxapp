
import * as React from 'react'
import {useState} from 'react'
import {View, Image, Button} from 'remax/wechat'
import DisplayNumber from '../../components/DisplayNumber'

import './index.css'


const IndexPage = () => {
  const [number, setNumber] = useState(0)
  const add1 = () => setNumber(prevNumber => prevNumber + 1)
  const subtract1 = () => setNumber(prevNumber => prevNumber - 1)

  return (
    <View className="app">
      <View className="header">
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className="logo"
          alt="logo"
        />
        <View className="text">
          <DisplayNumber number={number}></DisplayNumber>
        </View>
      </View>
      <Button onClick={add1}>+</Button>
      <Button onClick={subtract1}>-</Button>
    </View>
  )
}

export default IndexPage
