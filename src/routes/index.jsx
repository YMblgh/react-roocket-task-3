import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import ManageBlogs from "./pages/ManageBlogs"
import Root from "./Root"

const routesArray = [
    {
        path : "/",
        element : <Root />,
        children : [
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
                element : <ManageBlogs />
            }
        ],
    },
]

const routes = createBrowserRouter(routesArray)

export { routesArray }
export default routes