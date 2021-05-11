
import * as React from 'react'
import {View, Image, Text, Input, Button} from 'remax/wechat'
import {useState} from 'react'
//import DisplayNumber from '../../components/DisplayNumber'
import {useContext} from '../../hooks'

import './index.css'


const IndexPage = () => {
  const [setopt] = useState('')
  const classs = () => {
    setopt(event.detail.Button)
  }

  const [tasks, setTasks] = useState('')
  const handleinput = (event) => {
    console.log('event', event)
    setTasks(event.detail.value)
  }

  const [tasks2, setTasks2] = useState('')

  const handleinput2 = (event) => {
    console.log('event', event)
    setTasks2(event.detail.value)
  }

  const [tasks3, setTasks3] = useState('')
  const handleinput3 = (event) => {
    console.log('event', event)
    setTasks3(event.detail.value)
  }

  const datum = () => {
    if (context.user.credit >= 2) {
      context.user.credit -= 2
      //上传button task task2 task3
    } else {
      //换成提示页面,积分不足
    }


  }

  const [context] = useContext()

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


      <View className="body flex block flex--wrap flex--center">

        <View className="block2 flex flex--nowrap">
          <View className="block2" >
          </View>
          <Button hoverClassName='option' onTap={classs} hoverStayTime={2000}>帮取外卖</Button>

          <View className="block2" >
          </View>
          <Button hoverClassName='option' onTap={classs} hoverStayTime={2000}>帮取快递</Button>
        </View>

        <View className="block2 flex flex--nowrap">
          <Text>地点:</Text>
          <View className="inputs">
            <Input value={tasks} onInput={handleinput} />
          </View>
        </View>
        <View className="block2 flex flex--nowrap">
          <Text>尾号:</Text>
          <View className="inputs">
            <Input value={tasks2} onInput={handleinput2} type="number"/>
          </View>
        </View>
        <View className="block2 flex flex--nowrap">
          <Text>时间:</Text>
          <View className="inputs">
            <Input value={tasks3} onInput={handleinput3} type="number"/>
          </View>
        </View>
        <Button hoverClassName='option' onTap={datum} hoverStayTime={2000}>确认</Button>
      </View>


      <View className="body2 flex block flex--center" onClick={task}>
        <Text>接任务</Text>
      </View>
    </View>

  )
}

export default IndexPage
