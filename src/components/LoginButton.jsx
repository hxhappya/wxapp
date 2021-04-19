
import * as React from 'react'
import {Button} from 'remax/wechat'

import {useContext} from '../hooks'


async function getUserInfo (data) {
  // return wx.cloud.callFunction({
  //   name: 'getUser',
  //   data,
  // })
  return {
    userId: 1,
    avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIJR7AePS7nJbCWzFuiaqgRRic1Ughu5fIFDVRHDLsDeo5R1godU5bdbmp338UOg5FVo9E0iamFsbh0Q/132',
    nickName: 'Sy',
    credit: Math.random() * 1000 | 0,
  }
}


const LoginButton = ({onGetUserInfo, children}) => {
  const [, setContext] = useContext()

  const saveUserInfo = userInfo => {
    setContext(prev => ({
      ...prev,
      user: userInfo
    }))
    wx.setStorage({
      key: 'userInfo',
      data: userInfo,
    })
    if (onGetUserInfo) onGetUserInfo(userInfo)
  }

  const onClick = async event => {
    const storage = wx.getStorageSync('userInfo')
    const cloudResult = await getUserInfo(storage && storage.userId
      ? storage
      : await wx.getUserProfile({
        desc: '用于完善会员资料',
      })
    )
    saveUserInfo(cloudResult)
  }

  return (
    <Button
      className="login-button"
      onClick={onClick}
    >{children}</Button>
  )
}

export default LoginButton
