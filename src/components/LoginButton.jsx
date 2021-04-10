
import * as React from 'react'
import {Button} from 'remax/wechat'


const LoginButton = ({onGetUserInfo, children}) => {
  const onClick = event => {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: onGetUserInfo,
    })
  }
  return (
    <Button
      className="login-button"
      onClick={onClick}
    >{children}</Button>
  )
}

export default LoginButton
