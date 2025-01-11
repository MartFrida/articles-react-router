import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/slice'

const rootReducer = combineReducers({
	user: userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})
