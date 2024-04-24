export default ({ item }) => {

    console.log(item);

    function onEditHandler() {
        
    }

    function onDeleteHandler() {

    }

    return (
        <tr>
            <td className="border border-slate-700">{ item?.name }</td>
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