import BlogItemRow from "./BlogItemRow"

export default ({ children }) => {
    return (
        <table className="table-auto border border-slate-500 w-full mt-6">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border border-slate-600 px-2 py-3">عنوان</th>
                        <th className="border border-slate-600 px-2 py-3">تاریخ ایجاد</th>
                        <th className="border border-slate-600 px-2 py-3 w-0">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    { children }
                </tbody>
            </table>
    )
}