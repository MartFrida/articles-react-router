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
  reducers: {}
})

export const authReducer = slice.reducer