import { createSlice, current } from '@reduxjs/toolkit'

const Dashboard = createSlice({
    name : "dashboard",
    initialState : {
        chartData : []
    },
    reducers : {
        add : (dashboardData, actions) => {
            console.log(dashboardData);
            // console.log(blogs);
            // blogs.push(...actions.payload)
            // return [
            //     ...blogs,
            //     ...actions.payload
            // ]
        },
        remove : (blogs, { payload }) => {
            console.log("remove");
            // return current(blogs).filter(blog => blog.id !== payload.id)
        },
    }
})


export const { add , remove } = Dashboard.actions
export default Dashboard.reducer