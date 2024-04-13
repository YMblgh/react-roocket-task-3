import { createSlice } from '@reduxjs/toolkit'

const SideBar = createSlice({
    name : "sidebar",
    initialState : {
        show : true
    },
    reducers : {
        toggle : (state) => {
            state.show = !state.show
        }
    }
})


export const { toggle } = SideBar.actions
export default SideBar.reducer