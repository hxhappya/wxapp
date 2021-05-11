import * as React from 'react'
import {View, Image, Button, Text} from 'remax/wechat'


import './index.css'


export default function Share_codePage () {
  const share = (event) => {
    /*点击后发送链接分享 */
  }
  return (
    <View className = "app">
      <View className="header flex block flex--nowrap flex--center">
        <View className="block3 flex flex--verticle">
          <View className="block">
            <Image
              src="/images/pro-share.png"
              className="headercode"
              alt="headercode"
            />
          </View>
          <View className="block3">分享</View>
        </View>
        <View className="block3">
          <Image
            src="/images/arrow.png"
            className="arrow"
            alt="arrow"
          />
        </View>
        <View className="block3 flex flex--verticle">
          <View className="block">
            <Image
              src="/images/inte.png"
              className="headercode"
              alt="headercode"
            />
          </View>
          <View className="block3">积分</View>
        </View>
        <View className="block3">
          <Image
            src="/images/arrow.png"
            className="arrow"
            alt="arrow"
          />
        </View>
        <View className="block3 flex flex--verticle">
          <View className="block">
            <Image
              src="/images/pro-lan.png"
              className="headercode"
              alt="headercode"
            />
          </View>
          <View className="block3">下单</View>
        </View>
      </View>


      <View className="body flex block">
        <Image
          src="/images/qrcode2.png"
          className="qrcode"
          alt="qrcode"
        />

      </View>

      <Button className="button block"  onTap={share} >分享好友</Button>
    </View>
  )

}
