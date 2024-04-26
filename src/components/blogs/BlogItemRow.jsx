import { useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
import useUpdateBlogs from "../../hooks/useUpdateBlogs";
import { edit , remove } from "../../store/slices/blogs";

export default ({ item }) => {
    const dispatcher = useDispatch()

    // console.log(item);

    async function onEditHandler() {

        const editPost = async (postNewName) => {
            let data = {...item}
            data.name = postNewName
            const post = await useUpdateBlogs({ method : "put" , data })
            return post
        }

        const modal = {
            title: "ویرایش مقاله",
            input: "text",
            inputValue: item.name,
            showCancelButton: true,
            cancelButtonText: "لفو",
            confirmButtonText: "تائید",
            showLoaderOnConfirm : true,
            preConfirm : editPost,
        }

        const confirmedPost = await useModal(modal)

        // console.log(confirmedPost);
        if (confirmedPost) {
            dispatcher(edit(confirmedPost))
        }
    }


    async function onDeleteHandler() {
        
        const editPost = async () => {
            let data = {...item}
            const post = await useUpdateBlogs({ method : "delete" , data })
            return post
        }

        const modal = {
            title: "حذف مقاله",
            titleText: `آیا از حذف ${item.name} مطمئن هستید؟`,
            // input: "text",
            // inputValue: item.name,
            showCancelButton: true,
            cancelButtonText: "لفو",
            confirmButtonText: "تائید",
            showLoaderOnConfirm : true,
            icon: "error",
            preConfirm : editPost,
        }

        const confirmedPost = await useModal(modal)

        // console.log(confirmedPost);
        if (confirmedPost) {
            dispatcher(remove(confirmedPost))
        }
    }

    return (
        <tr>
            <td className="border border-slate-700 ps-2">{ item?.name }</td>
            <td className="border border-slate-700 text-center">{ item?.createdAt }</td>
            <td className="border border-slate-700">
                <div className="flex">
                    <button onClick={onEditHandler} className="bg-gray-600 px-4 py-1 text-gray-300 hover:opacity-75">ویرایش</button>
                    <button onClick={onDeleteHandler} className="bg-red-600 px-4 py-1 text-red-200 hover:opacity-75">حذف</button>
                </div>
            </td>
        </tr>
    )
}