import React, {useEffect} from 'react'
import Cursor from './Cursor'

const Layout = ({children}) => {
  let window = undefined;

  useEffect(() => {
    if(typeof window === undefined) return;
    else  window = window
  })

  
 
  return (
    <main className="landing">
      {children}
      <Cursor listenerElement={window} />
    </main>
  )
  
}

export default Layout
