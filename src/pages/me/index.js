
import * as React from 'react'
import {useEffect} from 'react'
import {View, Image, Text} from 'remax/wechat'

import LoginButton from '../../components/LoginButton'
import {useContext} from '../../hooks'

import './index.css'


const IndexPage = () => {
  const [context] = useContext()

  useEffect(() => {
    console.log('context', context)
    console.count('rerender me')
  }, [context])

  return (
    <View className="app">
      <View className="header flex background--white">
        {context.user.avatarUrl
          ? (
            <Image
              src={context.user.avatarUrl}
              className="avatar"
              alt="avatar"
            />
          )
          : null
        }
        <View className="userinfo flex flex--verticle flex--1">
          <View className="nickname">{context.user.nickName}</View>
          <View className="credit">积分：{context.user.credit}</View>
        </View>
      </View>

      <View className="block history">
        <Text>积分记录</Text>
      </View>

      <View className="block">
        <LoginButton>
          <View className="text">授权登录</View>
        </LoginButton>
      </View>

    </View>
  )
}

export default IndexPage
