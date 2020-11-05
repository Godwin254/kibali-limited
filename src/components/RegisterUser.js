import React from 'react'
import '../stylesheet/logins.css'

function RegisterUser({handleClick,name}) {
     

     
     return (
          <div className = "userlogin signup">
               <h4>{name}</h4>

               <div className = "first-name">
                    <input type="text" name="firstName" placeholder = "first name" required/>
               </div>

               <div className = "last-name">
                    <input type="text" name="lastName" placeholder = "last name" required/>
               </div>

               <div className = "id-no">
                    <input type="text" name="idNo" placeholder = "ID number" required/>
               </div>

               <div className = "password">
                    <input type="password" name= "password" placeholder = "password" required />
               </div>

               <div className = "password">
                    <input type="password" name= "password" placeholder = "confirm password" required/>
               </div>
          
               <input type="button" value="Sign up" />

               <p onClick = {handleClick} >Already have account, login</p>
          </div>
     )
}

export default RegisterUser;
