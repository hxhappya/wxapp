
import * as React from 'react'
import {createContext, useState} from 'react'

import './app.css'


export const Context = createContext({})

export default function App ({children}) {
  const [context, setContext] = useState({
    user: {
      name: '',
      avatarUrl: '',
    }
  })

  console.log('rerender', context)

  return (
    <Context.Provider value={{
      context,
      setContext,
    }}>{children}</Context.Provider>
  )
}
