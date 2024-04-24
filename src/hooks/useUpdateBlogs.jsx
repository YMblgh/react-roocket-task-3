import axios from "axios"
import { useDispatch } from "react-redux";
import { add } from "../store/slices/blogs";
import { useState } from "react";

export default async ({ method = 'get' , data = null }) => {
    // const [a , seta] = useState()
    // let dispatcher = useDispatch()

    const url = 'https://660453ae2393662c31d12ede.mockapi.io/admin-posts'

    let res = await axios[method](url, data).then(res => {
        // console.log(res);
        return res.data
    })



    // dispatcher(add(res))
    console.log(res);
    return res
}
