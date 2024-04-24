import { Outlet } from "react-router-dom"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import SideBar from "../components/layouts/SideBar"
import { Provider, useDispatch } from 'react-redux'
import { store } from "../store"
import useUpdateBlogs from "../hooks/useUpdateBlogs"
import { useContext, useEffect } from "react"
import { add } from "../store/slices/blogs"

export default () => {

    const dispatcher = useDispatch()

    useEffect(() => {
        async function getPosts() {
            const posts = await useUpdateBlogs({})
            dispatcher(add(posts))
        }
        getPosts()
    }, [])
    // console.log(posts);

    return (
        <div>
            {/* <PostsContext.Provider value={posts} > */}
                {/* <Provider store={ store } > */}
                    <Header />
                    <div className="relative flex" dir="rtl">
                        <SideBar className="basis-1/6 pt-28 " />
                        <div className="bg-stone-100 w-full min-h-screen">
                            <div className="mt-20">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    <Footer />
                {/* </Provider> */}
            {/* </PostsContext.Provider> */}
        </div>
    )
}