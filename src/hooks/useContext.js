
import {useContext} from 'react'
import {Context} from '../app'

export default () => {
  const {context, setContext} = useContext(Context)
  return [context, setContext]
}
