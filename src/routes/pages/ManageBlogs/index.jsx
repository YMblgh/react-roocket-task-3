import { useDispatch, useSelector } from "react-redux"
import BlogItemRow from "../../../components/blogs/BlogItemRow"
import BlogsTable from "../../../components/blogs/BlogsTable"
import useModal from "../../../hooks/useModal"
import { useEffect } from "react"
import blogs, { add } from "../../../store/slices/blogs"
import useUpdateBlogs from "../../../hooks/useUpdateBlogs"

let dispatcher

export default () => {

    dispatcher = useDispatch()

    const blogs = useSelector(state => state.blogs)

    const newBlogBtn = () => {
      useModal(dispatcher)
    }

    // if (blogs.length == 0) {
    //     useUpdateBlogs({})
    // }
    // const blogs = useUpdateBlogs({ method : "get" })
    


    return (
        <div className="px-20 py-20 border-4 rounded-lg" dir="rtl" >
            <span className="text-3xl">مقالات</span>
            {/* create new blog */}
            <button onClick={newBlogBtn} className="bg-green-700 text-green-100 px-3 py-2 rounded-md ms-4 hover:opacity-80">مقاله جدید</button>
            <BlogsTable >
                {/* <BlogItemRow /> */}
                {
                    blogs.map(blog => {
                        // console.log(blog);
                        return <BlogItemRow key={blog?.id} item={blog} />
                    })
                }
            </BlogsTable>
        </div>
    )
}