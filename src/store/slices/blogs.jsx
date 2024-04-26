import { createSlice, current } from '@reduxjs/toolkit'

const Blogs = createSlice({
    name : "blogs",
    initialState : [],
    reducers : {
        add : (blogs, actions) => {
            // console.log(blogs);
            // blogs.push(...actions.payload)
            return [
                ...blogs,
                ...actions.payload
            ]
        },
        edit : (blogs, { payload }) => {
            // console.log(payload);
            
            return current(blogs).map((blog => {
                // console.log(blog);
                if (blog.id === payload.id) {
                    console.log({...blog});
                    return {
                        ...blog,
                        name : payload.name
                    }
                }
                return blog
            }))
        },
        remove : (blogs, { payload }) => {
            return current(blogs).filter(blog => blog.id !== payload.id)
        },
    }
})


export const { add , edit , remove } = Blogs.actions
export default Blogs.reducer