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