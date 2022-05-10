import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : null,
    reducers : {
        authUser: state => state.authUser
    }
})

export const {authUser} = userSlice.actions;
export default userSlice.reducer