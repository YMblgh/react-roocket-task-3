import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"

export default () => {

    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div className="p-5">
                
        </div>
    )
}