import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (text) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const instance = axios.create({
  baseURL: 'https://leader-code-team-power-pulse-back-end.onrender.com/api/',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      if (userToken) {
        token.set(userToken);
        const { data } = await instance.get('auth/current');
        return data;
      }
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const token = state.auth.token;
      if (!token) {
        return false;
      }
    },
  }
);

export const updateUserProfile = createAsyncThunk('profile/updateUserProfile', async (newData, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const userToken = state.auth.token;
    token.set(userToken);
    const { data } = await instance.put('profiles', newData);
    return data;
  } catch (error) {
    toastError(`Oops! Something was wrong... ${error.response.data.message}`);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getTarget = createAsyncThunk('profile/getTarget', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const userToken = state.auth.token;
    token.set(userToken);
    const { data } = await instance.get('profiles/targets');
    return data;
  } catch (error) {
    toastError(`Oops! Something was wrong... ${error.response.data.message}`);
    return thunkApi.rejectWithValue(error.message);
  }
});
