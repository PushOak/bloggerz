import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    filter: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("User friends are non-existent.");
            }
        },
        setPosts: (state, action) => {
            action.payload.posts.sort((p1, p2) => p2.createdAt.localeCompare(p1.createdAt));
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post._id !== action.payload);

        },
        setFilter: (state, action) => {
            state.filter = action.payload.toLowerCase();
        }
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, deletePost, setFilter } =
    authSlice.actions;
export default authSlice.reducer;