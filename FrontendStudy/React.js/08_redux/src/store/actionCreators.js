import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants.js'

export const addAction = number => ({
  type: ADD_NUMBER,
  number
})

export const subAction = number => ({
  type: SUB_NUMBER,
  number
})

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
