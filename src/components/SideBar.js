import React from 'react'
import '../stylesheet/sidebarstyle.css'
import * as FaIcons from 'react-icons/fa'

function SideBar() {

     //const header = document.getElementsByClassName("sidebar");
     //const lists = header.getElementsByClassName("lists");
     const btns = document.getElementsByClassName("list");

     //toggle between active side list on clik
     for (var i = 0; i < btns.length; i++){

          btns[i].addEventListener("click", function(){
               var current = document.getElementsByClassName("active");

               if(current.length > 0){
                    current[0].className = current[0].className.replace("active", "");
               }
               this.className += "active";
          });
     }

     return (
          <div className = "sidebar">

               <span>KIBALI STORE</span>

               <div className="icon">
                    <h4>Admin</h4>
               </div>
               
               <div className ="lists">

                    <div className="home list active">
                         <FaIcons.FaHome/>
                         <span><h3>Home</h3></span>
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
