
import * as React from 'react'
import {View, Image, Text, Input} from 'remax/wechat'
import {useState} from 'react'
//import DisplayNumber from '../../components/DisplayNumber'
//import {useContext} from '../../hooks'

import './index.css'


const IndexPage = () => {
  const [tasks, setTasks] = useState('')
  const handleinput = (event) => {
    console.log('event', event)
    setTasks(event.detail.value)
  }
  //const [context] = useContext()
  const task = event => {
    wx.navigateTo({
      url: '/pages/task/index',
      complete: console.log
    })
  }
  return (
    <View className="app">
      <View className="brow">
        <Text>欢迎使用阿蒙跑腿</Text>
      </View>
      <View className="header flex">
        <Image
          src="/images/icon.png"
          className="logo"
          alt="logo"
        />
      </View>
      <View className="body flex block">
        <View className="block">
          <Text>发布任务</Text>
        </View>
        <View className="block">
          <Input value={tasks} onInput={handleinput} />
        </View>
      </View>
      <View className="body2 flex block" onClick={task}>
        <Text>接任务</Text>
      </View>
    </View>

  )
}

export default IndexPage
