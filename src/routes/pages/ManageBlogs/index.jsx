import BlogsTable from "../../../components/blogs/BlogsTable"

export default () => {

    const handleClick = () => {
        
    }


    return (
        <div className="px-20 py-20 border-4 rounded-lg" dir="rtl" >
            <span className="text-3xl">مقالات</span>
            <button onClick={handleClick} className="bg-green-700 text-green-100 px-3 py-2 rounded-md ms-4 hover:opacity-80">مقاله جدید</button>
            <BlogsTable />
        </div>
    )
}