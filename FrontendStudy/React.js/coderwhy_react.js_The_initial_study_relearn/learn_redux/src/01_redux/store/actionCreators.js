import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants.js'

export const addAction = number => ({
  type: ADD_NUMBER,
  number
})

export const subAction = number => ({
  type: SUB_NUMBER,
  number
})

export const incrementAction = () => ({
  type: INCREMENT
})

export const decrementAction = () => ({
  type: DECREMENT
})
