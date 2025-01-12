import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../configAxios/api.js'


export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const response = await api.post('auth/signup', credentials)
    console.log(response)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})