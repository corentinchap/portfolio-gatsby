import React, {useEffect} from 'react'
import Cursor from './Cursor'
import {window} from 'browser-monads'
import Helmet from 'react-helmet'

const Layout = ({children}) => {
 
  return (
    <main className="landing">   
    <Helmet title="Chapatte Co. Portfolio" />
      {children}
      <Cursor listenerElement={window} />
    </main>
  )
  
}

export default Layout
