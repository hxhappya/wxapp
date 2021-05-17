
import * as React from 'react'
import {View} from 'remax/wechat'

import styles from './tabs.css'


export default function Tabs ({tabs, value, onClick}) {
  const handleClick = id => onClick && onClick(id)

  return (
    <View className={styles.tabs}>
      {tabs.map(tab => (
        <View
          className={`${styles.tab} ${value === tab.id ? styles['tab--active'] : ''}`}
          key={tab.id}
          onClick={() => handleClick(tab.id)}
        >{tab.name}</View>
      ))}
    </View>
  )
}
