import axios from "axios"
import { useDispatch } from "react-redux";
import { add } from "../store/slices/blogs";
import { useState } from "react";

export default async ({ method = 'get' , data = null }) => {

    const client = axios.create({
        baseURL : "https://660453ae2393662c31d12ede.mockapi.io/admin-posts"
    })

    let res = await client[method](data?.id, data).then(res => {
        return res.data
    })


    // console.log(res);
    return res
}
