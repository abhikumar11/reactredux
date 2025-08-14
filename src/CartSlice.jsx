import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{cartitems:[]},
    reducers:{
        addItem:(state,action)=>{
            state.cartitems.push(action.payload);
        }
    }
})
export const {addItem}=cartSlice.actions;
export const cart=cartSlice.reducer;