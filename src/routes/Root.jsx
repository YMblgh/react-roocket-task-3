import { Outlet } from "react-router-dom"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import SideBar from "../components/layouts/SideBar"

export default () => {
    return (
        <div>
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
        </div>
    )
}