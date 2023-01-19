import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStore = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const signUpUser = createAsyncThunk("user/signUpUser", async (body) => {
    console.log(body)

    const res = await fetch("http://localhost:3000/signup", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return await res.json()
})

export const signInUser = createAsyncThunk("auth/signInUser", async (body) => {
    console.log("body")
    const res = await fetch("http://localhost:3000/signin", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return await res.json()
})

const authSlice = createSlice({
    name: 'user',
    initialState: initialStore,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.token = localStorage.getItem("user")
        },
        logout: (state, action) => {
            state.token = localStorage.clear()
        },
    },

    extraReducers: {
        [signInUser.pending]: (state, action) => {
            state.loading = true
        },
        [signInUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
            state.loading = false
            if (error) {
                state.error = error
            } else {
                state.msg = msg
                state.token = token
                state.user = user
                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringfy(user))
                localStorage.setItem('token', token)
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },

        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },
        [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false
            if (error) {
                state.error = error
            } else {
                state.msg = msg
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        },

    }
})

export const { addToken, addUser, logout } = authSlice.actions

export default authSlice.reducer