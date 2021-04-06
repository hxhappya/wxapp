
import * as React from 'react'
import {View, Image} from 'remax/wechat'

import './index.css'


const IndexPage = () => {
  return (
    <View className="app">
      <View className="header">
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className="logo"
          alt="logo"
        />
        <View className="text">
          Me
        </View>
      </View>
    </View>
  )
}

export default IndexPage
