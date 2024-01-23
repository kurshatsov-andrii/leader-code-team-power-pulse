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
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addDiaryProduct = createAsyncThunk('addDiaryProduct', async (productDetails, thunkAPI) => {
  try {
    await instance.post('/diary/addProduct', productDetails);
    return;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteProduct = createAsyncThunk('deleteProduct', async (productDetails, thunkAPI) => {
  const { id, date } = productDetails;

  try {
    await instance.delete(`/diary/deleteProduct`, { data: { id, date } });
    toastSuccess(`Product delete successfully`);
    return id;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addExercise = createAsyncThunk('addExercise', async (exercise, thunkAPI) => {
  try {
    await instance.post('/diary/addExercise', exercise);
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteExercise = createAsyncThunk('deleteExercise', async (exerciseDetails, thunkAPI) => {
  const { id, date } = exerciseDetails;

  try {
    await instance.delete(`/diary/deleteExercise`, { data: { id, date } });
    toastSuccess(`Exercise delete successfully`);
    return id;
  } catch (error) {
    toastError(`Oops! Something was wrong.... ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});
