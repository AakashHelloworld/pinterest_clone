import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userName: "",
    id:"",
    email:"",
}

const authSlice=createSlice(
    {
        name:"auth",
        initialState,
        reducers:{
            login:(state,action)=>{
                console.log(action)
                state.status=true
                state.userName=action.payload.data.name
                state.email=action.payload.data.email
                state.id=action.payload.data.$id
            },
            logout:(state)=>{
                state.status=false
                state.userData=null
            }
        }
    }
)
export const { login, logout } = authSlice.actions

export const authReducer = authSlice.reducer