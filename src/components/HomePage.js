import React, { Component } from 'react'
import UserLogin from './UserLogin'
import RegisterUser from './RegisterUser'

class HomePage extends Component {
    constructor(props) {
         super(props)
    
         this.state = {
               isClicked: true,
               isAdmin: false
         }
    }
    
    handleClick(){
         this.setState({
              isClicked: true
         });
    }

    
     
     render() {
          const {isClicked,isAdmin} = this.state;

          if(isClicked){
               if(isAdmin){
                    return <UserLogin handleClick = {this.handleClick}  name = "Admin"/> 
               }else
                    return <UserLogin handleClick = {this.handleClick}  name = "Employee"/>
          }else{
               return <RegisterUser handleClick = {this.handleClick}/>
          }
          /*
          return (
               <React.Fragment>
                    isClicked ?
               </React.Fragment>
          )
          */
     }
}

export default HomePage
