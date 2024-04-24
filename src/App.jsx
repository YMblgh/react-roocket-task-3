import React, { Fragment } from 'react'

import {useRoutes} from "react-router-dom"

import routes from './routes'

function App() {

    const route = useRoutes(routes)

  return (
    <Fragment >
        {route}
    </Fragment>
  )
}

export default App