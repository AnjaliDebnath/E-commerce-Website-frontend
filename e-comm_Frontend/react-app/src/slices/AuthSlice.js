import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name: 'auth',
    initialState: {
        setCurrentUser:null
       
    },
    reducers: {
        setCurrentUser:(state, {payload})=>{
            const user= payload.username;
            state.setCurrentUser=user;
        },
        removeCurrentUser:(state)=>{
            state.setCurrentUser=null;
        }
    }

})

export const {setCurrentUser, removeCurrentUser}=authSlice.actions;