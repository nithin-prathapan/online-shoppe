import {createSlice} from '@reduxjs/toolkit'


const initialState={
    name:"",
    emil:"",
    isLoggedIn:false
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLogin:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.isLoggedIn=action.payload.isLoggedIn;
        }
    }

})
export const {setUserLogin}=userSlice.actions
export const selectUserName=(state)=>state.user.name
export const selectUserEmail=(state)=>state.user.email
export const selectUserStatus=(state)=>state.user.isLoggedIn
export default userSlice