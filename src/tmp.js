
// module  name/path

export const useState = initialState => {
  let state = initialState
  const setState = value => {
    state = value
  }
  return [state, setState]
}

const arr = [1, () => {}]
const [x, y] = arr



export default x
