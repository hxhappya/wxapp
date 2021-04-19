
import * as React from 'react'
import {useState} from 'react'
import {View, Image, Button} from 'remax/wechat'
import DisplayNumber from '../../components/DisplayNumber'
import {useContext} from '../../hooks'

import './index.css'


const IndexPage = () => {
  const [context] = useContext()

  const [number, setNumber] = useState(0)
  const add1 = () => setNumber(prevNumber => prevNumber + 1)
  const subtract1 = () => setNumber(prevNumber => prevNumber - 1)

  return (
    <View className="app">
      <View className="header">
        <Image
          src={context.user.avatarUrl}
          className="logo"
          alt="logo"
        />
        <View className="text">
          <DisplayNumber number={number}></DisplayNumber>
          <DisplayNumber number={context.user.credit}></DisplayNumber>
        </View>
      </View>
      <Button onClick={add1}>+</Button>
      <Button onClick={subtract1}>-</Button>
    </View>
  )
}

export default IndexPage
