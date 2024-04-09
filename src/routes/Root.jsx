import { Outlet } from "react-router-dom"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

export default () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}