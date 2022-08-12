import { createSlice } from "@reduxjs/toolkit";

const initialState={
    itemName:'',
    itemPrice:''
}
const ItemSlice=createSlice({
    name:'item',
    initialState,
    reducers:{
        setItem:(state,action)=>{
            state.itemName=action.payload;
            state.itemPrice=action.payload;

        }
    }

})
export const {setItem}=ItemSlice.actions