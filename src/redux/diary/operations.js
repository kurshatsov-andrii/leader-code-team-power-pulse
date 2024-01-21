import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../auth/operations';

const options = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const toastError = (text) => {
  toast.error(text, options);
};

export const toastSuccess = (text) => {
  toast.success(text, options);
};

export const getDiaryList = createAsyncThunk('getDiaryList', async (date, thunkAPI) => {
  try {
    const { data } = await instance.get(`/diary/getDiary/${date}`);
    return data;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addDiaryProduct = createAsyncThunk('addDiaryProduct', async (productDetails, thunkAPI) => {
  try {
    const { data } = await instance.post('/diary/addProduct', productDetails);
    console.log('productDetailsAdd', productDetails);
    return data;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteProduct = createAsyncThunk('deleteProduct', async (productDetails, thunkAPI) => {
  const { id, date } = productDetails;

  try {
    await instance.delete(`/diary/deleteProduct?id=${id}&date=${date}`);
    toastSuccess(`Product delete successfully`);
    return id;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addExercise = createAsyncThunk('addExercise', async (exercise, thunkAPI) => {
  console.log('exercise', exercise);
  try {
    const { data } = await instance.post('/diary/addExercise', exercise);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteExercise = createAsyncThunk('deleteExercise', async (exerciseDetails, thunkAPI) => {
  console.log('exerciseDetailsDELETE', exerciseDetails);
  try {
    const { id, date } = exerciseDetails;
    await instance.delete(`/diary/deleteExercise?date=${date}&id=${id}`);
    toastSuccess(`Exercise delete successfully`);
    return id;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});
