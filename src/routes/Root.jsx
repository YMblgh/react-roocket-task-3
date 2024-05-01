import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import SideBar from "../components/layouts/SideBar"
import { Provider, useDispatch } from 'react-redux'
import { store } from "../store"
import useUpdateBlogs from "../hooks/useUpdateBlogs"
import { useContext, useEffect } from "react"
import { add } from "../store/slices/blogs"
import AuthContext from "../contexts/AuthContext"
import Login from "./pages/Login"
import Panel from "./Panel"

export default () => {

    // const user = useContext(AuthContext)
    // const location = useLocation()
    
    return (
        <Panel />
    )
}