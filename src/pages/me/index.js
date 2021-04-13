
import * as React from 'react'
import {useEffect} from 'react'
import {View, Image} from 'remax/wechat'

import LoginButton from '../../components/LoginButton'
import {useContext} from '../../hooks'

import './index.css'


const IndexPage = () => {
  const [context, setContext] = useContext()

  const onGetUserInfo = event => {
    console.log('avatarUrl', event.userInfo.avatarUrl) // TODELETE
    const {userInfo} = event

    setContext(prev => ({
      ...prev,
      user: {
        ...prev.user,
        avatarUrl: userInfo.avatarUrl,
      }
    }))
  }

  useEffect(() => {
    console.log('context', context)
    console.count('rerender me')
  }, [context])

  return (
    <View className="app">
      <View className="header">
        {context.user.avatarUrl
          ? (
            <Image
              src={context.user.avatarUrl}
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
