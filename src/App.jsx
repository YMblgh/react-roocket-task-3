import React, { Fragment, useContext, useEffect, useState } from 'react'

import {Navigate, useNavigate, useRoutes} from "react-router-dom"

import AuthContext from './contexts/AuthContext'
import axios, { Axios } from 'axios'
import useModal from './hooks/useModal'
import Login from './routes/pages/Login'
import routes from './routes'

function App() {
    const [ userData , setUserData ] = useState(null)
    const route = useRoutes(routes)
    const navigate = useNavigate()

    useEffect(() => {
      if (!userData) {
        const user = JSON.parse(localStorage.getItem("user"))

        if (!user) {
          // then redirect to "/login" path
          console.log("user wasn't in localStorage");
            navigate('/login')
        } else {
          console.log("user received from localStorage and added to context.");
          setUserData(user)
        }  
      }
    }, [userData])

    console.log(userData);
        
  return (
    <AuthContext.Provider value={userData} >
      <Fragment >
          {route}
      </Fragment>
    </AuthContext.Provider>
  )
}

export default App