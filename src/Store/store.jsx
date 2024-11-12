import {configureStore} from '@reduxjs/toolkit';
import cartSliceReducer from '../Store/cartSlice';

export const store = configureStore(
    {
        reducer:{
            cart:cartSliceReducer,}
    }
)
