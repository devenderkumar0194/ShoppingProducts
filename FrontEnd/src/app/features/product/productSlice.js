import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const backEndURL = "http://localhost:3000";

// Async call to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(backEndURL+'/api/product-list');
    const data = await response.json();
    return data;
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if(action.payload.status === 200){
          state.items = action.payload.data;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
