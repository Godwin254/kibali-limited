import React from 'react'
import '../stylesheet/navbarstyle.css'

function NavBar() {
     return (
          <div className="navbar">

               <div className="navlink">

                         <div className="search-icon list">
                              <p>Search icon</p>
                         </div>

                         <div className="cart list">
                              <p>Cart</p>
                         </div>

                         <div className="alert list">
                              <p>Alert</p>
                         </div>

                         <div className="sort list">
                              <p>Sort</p>
                         </div>

               </div>
               
          </div>
     )
}

export default NavBar
