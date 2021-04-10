
import * as React from 'react'
import {useState} from 'react'
import {View, Image} from 'remax/wechat'

import LoginButton from '../../components/LoginButton'

import './index.css'


const IndexPage = () => {
  const [avatar, setAvatar] = useState('')

  const onGetUserInfo = event => {
    console.log('avatarUrl', event.userInfo.avatarUrl)
    const {userInfo} = event

    setAvatar(userInfo.avatarUrl)
  }

  return (
    <View className="app">
      <View className="header">
        {avatar
          ? (
            <Image
              src={avatar}
              className="logo"
              alt="logo"
            />
          )
          : null
        }
        <LoginButton onGetUserInfo={onGetUserInfo}>
          <View className="text">Me</View>
        </LoginButton>
      </View>
    </View>
  )
}

export default IndexPage
