import React, { Component } from 'react'
//import UserLogin from './UserLogin'
//import RegisterUser from './RegisterUser'
import SideBar from './SideBar'
import NavBar from './NavBar'

class HomePage extends Component {
    constructor(props) {
         super(props)
    
         this.state = {
               isClicked: true,
               isAdmin: true
         }
    }
    
    handleClick(){
         this.setState({
              isClicked: true
         });
    }

    
     
     render() {
          

         
     
          return (
               <React.Fragment>
                   <SideBar />
                   <NavBar />
               </React.Fragment>
          )
     
     }
}

export default HomePage
