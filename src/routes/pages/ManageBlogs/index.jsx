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

    const newBlogBtn = async () => {

        const addPost = async (postName) => {
            let data = {
                name : postName,
                createdAt : new Date().toLocaleString(),
            }
            const post = await useUpdateBlogs({ method : "post" , data })
            return post
        }

        const modal = {
            title: "نام مقاله را وارد کنید",
            input: "text",
            showCancelButton: true,
            cancelButtonText: "لفو",
            confirmButtonText: "تائید",
            showLoaderOnConfirm : true,
            preConfirm : addPost,
        }

        const confirmedPost = await useModal(modal)

        if (confirmedPost) {
            dispatcher(add([confirmedPost]))
        }
    }

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