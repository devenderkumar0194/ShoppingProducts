import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backEndURL = "http://localhost:3000";

// Async call to fetch products
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const response = await fetch(backEndURL+'/api/product-list');
//     const data = await response.json();
//     return data;
//   }
// );


// register User
export const registerUser = createAsyncThunk('products/registerUser', async (newUser, { rejectWithValue }) => {
  try {
    console.log("new regist user hit ");
    
      const response = await axios.post(backEndURL+'/api/register', newUser);
      return response.data; // success path
  } catch (err) {
    // Return 409 or any error message from API
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data);
    }
    return rejectWithValue({ message: err.message });
  }

  return response.data;
});



// // Edit product
// export const editProduct = createAsyncThunk('products/editProduct', async (product) => {
//   const response = await axios.put(`/api/products/${product.id}`, product);
//   return response.data;
// });

// // Delete product
// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
//   await axios.delete(`/api/products/${id}`);
//   return id;
// });


const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    status: 'idle', // loading | succeeded | failed
    error: null,
    addStatus: 'idle',
    addError: null,

  },
  reducers: {
      setAddError(state, action) {
        state.addError = action.payload;
      },
      clearAddError(state) {
        state.addError = null;
      },
  },
  extraReducers: (builder) => {
    builder

      // Fetch products 
    //   .addCase(fetchProducts.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(fetchProducts.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     if(action.payload.status === 200){
    //       state.items = action.payload.data;
    //     }
    //   })
    //   .addCase(fetchProducts.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    //   })

      // ADD
      .addCase(registerUser.pending, (state) => {
        state.addStatus = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
          state.addStatus = 'succeeded';
          state.items.unshift(action.payload.data);
          state.addError = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.addStatus = 'failed';
        state.addError = action.payload.message;
      })


      // // EDIT
      // .addCase(editProduct.fulfilled, (state, action) => {
      //   const index = state.items.findIndex((p) => p.id === action.payload.id);
      //   if (index !== -1) {
      //     state.items[index] = action.payload;
      //   }
      // })

      // // DELETE
      // .addCase(deleteProduct.fulfilled, (state, action) => {
      //   state.items = state.items.filter((p) => p.id !== action.payload);
      // });
  },
});

export const { setAddError, clearAddError } = userSlice.actions;


export default userSlice.reducer;
