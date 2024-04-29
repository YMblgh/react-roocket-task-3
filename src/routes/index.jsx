import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import ManageBlogs from "./pages/ManageBlogs"
import Root from "./Root"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import Login from "./pages/Login"

const panelRoutes = [
    {
        name : "Dashboard",
        faName : "داشبورد",
        path : "/",
        element : <Dashboard />
    },
    {
        name : "Manage Blogs",
        faName : "مدیریت مقالات",
        path : "/manage-blogs",
        element : <ManageBlogs />,
    },
]

const routes = [
    {
        path : "/",
        element : <Root />,
        children : panelRoutes,
    },
    {
        name : "Login",
        path : "/login",
        element : <Login />,
    }
]



// const routes = createBrowserRouter(routes)

// export { routes as routesArray }
export default routes