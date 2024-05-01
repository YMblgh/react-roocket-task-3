import { Link } from "react-router-dom"
import Dashboard from "../../routes/pages/Dashboard"
import routes from "../../routes";
import { getItem } from "localforage";
import { useContext, useEffect } from "react";
import { useSelector } from 'react-redux'
import AuthContext from "../../contexts/AuthContext";


let navigation 

export default ({ className }) => {

    navigation = routes[0].children
    // console.log(navigation);

    const showSideBar = useSelector(state => state.sidebar.show)

    return (
        <div className={`bg-slate-700 fixed top-0 bottom-0 right-0 pt-10 px-5 md:static min-w-72 ${!showSideBar ? 'hidden' : ''} ${className}`}>
            <div className="">
                {
                    navigation.map((item) => {
                    return <Link key={item.name} to={item.path} 
                        className={`block py-2.5 px-3 text-slate-300 bg-slate-800 hover:bg-slate-900 my-2 rounded-xl`}
                    >{ item.faName }</Link>
                    })
                }
                {/* <Link to="/manage-blogs" >salan</Link> */}
            </div>
        </div>
    )
}