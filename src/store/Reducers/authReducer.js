import { createSlice } from "@reduxjs/toolkit";


export const authReducer =createSlice({
    name:'auth',
    initialState:{
        successMessage:'',
        errorMessage:'',
        loader:false,
        loading:false,
        userInfo:null
    },
    reducers:{
        // loginRequest:(state)=>{
        //     state.loading=true
        // },
        // loginSuccess:(state,action)=>{
        //     state.loading=false
        //     state.user=action.payload.user
        //     state.token=action.payload.token
        //     state.isLoggedIn=true
        // },
        // loginFailure:(state,action)=>{
        //     state.loading=false
        //     state.error=action.payload
        // },
        // logout:(state)=>{
        //     state.user={}
        //     state.token=null
        //     state.isLoggedIn=false
        // }
    }
})

export default authReducer.reducer