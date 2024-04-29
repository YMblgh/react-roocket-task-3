import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Navigate, redirect, useNavigate } from "react-router-dom"

export default () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues : {
            email : '1999mym@gmail.com',
            password : '12345678'
        },
        validate : (values) => {
            let errors = {}

            if (values.password === "") {
                errors.password = "رمز عبور را وارد نکرده اید!"
            } else if (values.password.length < 4) {
                errors.password = "رمز عبور باید حداقل 4 رقم داشته باشد!"
            }

            console.log("errors:", errors);
            return errors
        },
        onSubmit : async (values) => {
            console.log("values:", values);
            await axios.post("https://react-camp-api.roocket.ir/api/admin/login", values).then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data))
                // setUserData(res.data)
                console.log("user received from api");
                console.log(res.data);
                // setlogin(true)
                navigate("/")
            }).catch(reason => {
                console.log(reason.message)
                // useModal()
            });
        }
    })
    
    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen" dir="rtl">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4 text-center">ورود به پنل کاربری</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">ایمیل</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full px-3 py-2 border rounded-md mt-2" 
                            placeholder="ایمیل خود را وارد کنید"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                             />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">رمز عبور</label>
                        <input 
                            type="password"     
                            id="password" 
                            name="password" 
                            className="w-full px-3 py-2 border rounded-md mt-2" 
                            placeholder="رمز عبور را وارد کنید" 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                             />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">تایید</button>
                    {/* <button type="button" onClick={() => navigate('/')} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">تایید</button> */}
                </form>
            </div>
        </div>
    )
}