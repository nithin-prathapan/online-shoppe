import {createSlice} from '@reduxjs/toolkit'


const initialState={
    userName:"",
    email:"",
    isLoggedIn:false
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLogin:(state,action)=>{
         
            state.userName=action.payload.userName;
            state.email=action.payload.email;
            state.isLoggedIn=action.payload.isLoggedIn;
        }
    }

})
export const {setUserLogin}=userSlice.actions
export const selectUserName=(state)=>state.user.userName
export const selectUserEmail=(state)=>state.user.email
export const selectUserStatus=(state)=>state.user.isLoggedIn
export default userSlice;