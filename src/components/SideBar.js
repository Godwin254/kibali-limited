import React from 'react'
import '../stylesheet/sidebarstyle.css'

function SideBar() {
     return (
          <div className = "sidebar">

               <span>LOGO</span>

               <div className="icon">
                    <h4>Admin</h4>
               </div>
               
               <div className ="lists">

                    <div className="home list">
                         <h3>Home</h3>
                    </div>

                    <div className="items list">
                         <h3>Comodities</h3>
                    </div>

                    <div className="sales list">
                         <h3>Sales track</h3>
                    </div>

                    <div className="supplier list">
                         <h3>Suppliers</h3>
                    </div>

                    <div className="setting list">
                         <h3>Settings</h3>
                    </div>

                    <div className="about list">
                         <h3>About app</h3>
                    </div>

               </div>

               <div className="info">
                    <h4>Version 0.0.1</h4>
                    <h4>Copyright 2020</h4>
               </div>
          </div>
     )
}

export default SideBar
