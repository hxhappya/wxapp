
import * as React from 'react'
import {View, Image, Text, Input, Button} from 'remax/wechat'
import {useState} from 'react'
//import DisplayNumber from '../../components/DisplayNumber'
import {useContext} from '../../hooks'

import './index.css'


const IndexPage = () => {
  const [setopt] = useState('')

  const classs = (text) => {
    console.log(text)
    setopt(text)
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


  const [number, setNumber] = useState(0)
  const add1 = () => setNumber(prevNumber => prevNumber + 5)
  const substract1 = (number) => {
    if(number === 0)
    {
      console.log(number)
    }
    else
    {
      setNumber(prevNumber => prevNumber - 5)
    }
  }


  const datum = () => {
    if (context.user.credit >= 2) {
      context.user.credit -= 2
      wx.showModal({
        title: '提示',
        content: '确定花费2积分发布任务',
        success (res) {
          if (res.confirm) {
            //上传button task task2 number
            wx.showModal({
              title: '提示',
              content: '任务已成功发布',
              success (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  wx.showToast({
                    title: '任务已发布',
                    icon: 'error',
                    duration: 2000
                  })
                  console.log('用户点击取消')
                }
              }
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else {
      //换成提示页面,积分不足
      wx.showToast({
        title: '积分不足',
        icon: 'error',
        duration: 2000
      })
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
          <Button hoverClassName='option' onTap={() => classs('帮取外卖')} hoverStayTime={2000}>帮取外卖</Button>

          <View className="block2" >
          </View>
          <Button hoverClassName='option' onTap={() => classs('帮取快递')} hoverStayTime={2000}>帮取快递</Button>
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
        <View className="block2 flex flex--nowrap flex--horizon">
          <Text>时间:</Text>
          <View className="block">
            <Button className="block" onTap={() => substract1(number)}>-</Button>
          </View>
          <View className="times">
            {number}
          </View>
          <View className="block">
            <Button className="block" onTap={add1}>+</Button>
          </View>
        </View>
        <View className="notes">
        注释：此时间为任务发布后多久可以接
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
