import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: '',
  isLoggedIn: false,
}
const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {}
})

export const authReducer = slice.reducer