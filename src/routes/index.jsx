import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import ManageBlogs from "./pages/ManageBlogs"
import Root from "./Root"


const routes = createBrowserRouter([
    {
        path : "/",
        element : <Root />,
        children : [
            {
                path : "/",
                element : <Dashboard />
            },
            {
                path : "/manage-blogs",
                element : <ManageBlogs />
            }
        ]
    },
])

export default routes