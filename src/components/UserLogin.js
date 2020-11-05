import React from 'react'
import '../stylesheet/logins.css'

function UserLogin({handleClick,name}) {
     

     
     return (
          <div className = "userlogin">
               <h4>{name}</h4>

               <div className = "username">
                    <input type="text" name="username" placeholder = "Username"/>
               </div>
               

               <div className = "username">
                    <input type="password" name= "password" placeholder = "password" />
               </div>
          
               <input type="button" value="Login"/>

               <p onClick = {handleClick} >create new user</p>
          </div>
     )
}

export default UserLogin
