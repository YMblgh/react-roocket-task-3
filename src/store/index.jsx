import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebar'
import blogs from './slices/blogs'
import dashboard from './slices/dashboard'


export const store = configureStore({
  reducer: {
    sidebar : sidebarReducer,
    blogs,
    dashboard
  },
})

