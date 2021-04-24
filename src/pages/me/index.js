
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

  const goHistory = event => {
    wx.navigateTo({
      url: '/pages/creditlist/index',
      complete: console.log
    })
  }
  const share_code = event => {
    wx.navigateTo({
      url: '/pages/share_code/index',
      complete: console.log
    })
  }
  return (
    <View className="app">
      {
        context.user.userId ? (
          <>
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
                {/* TODO: 类似微信的分享码 */}
              </View>
              <View className="qr_code flex" onClick={share_code}>
                <Image
                  src="/images/qrcode.png"
                  className="icon"
                  alt="icon"
                />
              </View>
            </View>
            <View className="flex block history" onClick={goHistory}>
              <Image
                src="/images/history.png"
                className="icon"
                alt="icon"
              />
              <Text>积分记录</Text>
            </View>
            <View className="flex block share-code" onClick={share_code}>
              <Image
                src="/images/share.png"
                className="icon"
                alt="icon"
              />
              <Text>分享码</Text>
            </View>
          </>
        ) : (
          <>
            <View className="icon-wrapper flex flex--center background--transparent">
              <Image
                src="/images/icon.png"
                className="icon"
                alt="icon"
              />
            </View>
            <LoginButton>
              <View className="text">授权登录</View>
            </LoginButton>
          </>
        )
      }

    </View>
  )
}

export default IndexPage
