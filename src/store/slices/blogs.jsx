import { createSlice } from '@reduxjs/toolkit'

const Blogs = createSlice({
    name : "blogs",
    initialState : [],
    reducers : {
        add : (blogs, actions) => {
            console.log(actions);
            blogs.push(...actions.payload)
        },
    }
})


export const { add } = Blogs.actions
export default Blogs.reducer