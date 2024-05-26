// //
import React from 'react'
import SidebarComp from './SidebarComp'
import Products from './Products'

const MainSidebar = () => {
  return (
    <div style={{display:"flex", paddingBottom:"0", backgroundColor:"#f3f3f3"}}>
      <SidebarComp/>
      <Products/>
    </div>
  )
}

export default MainSidebar
