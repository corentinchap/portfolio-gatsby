import React, {useEffect} from 'react'
import Cursor from './Cursor'
import {window} from 'browser-monads'

const Layout = ({children}) => {
 
  return (
    <main className="landing">    
      {children}
      <Cursor listenerElement={window} />
    </main>
  )
  
}

export default Layout
