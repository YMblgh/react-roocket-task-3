import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebar'
import blogs from './slices/blogs'


export const store = configureStore({
  reducer: {
    sidebar : sidebarReducer,
    blogs
  },
})

