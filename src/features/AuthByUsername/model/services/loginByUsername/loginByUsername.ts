import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/config/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

// export enum LOGIN_ERRORS {
//   INCORRECT_DATA = '',
//   SERVER_ERROR = ''
// }

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password
      })
      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('login_issue')
    }
  }
)
