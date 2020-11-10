import React from 'react'
import '../stylesheet/home.css';

function Home({title}) {
     return (
          <div className="main">
              
              <div className="title">
                    <h4>{title}:</h4>
               </div>

               <div className="items">

                    <div className="item">
                         <h3>item</h3>
                    </div>

                    <div className="item">
                         <h3>item</h3>
                    </div>

                    <div className="item">
                          <h3>item</h3>
                    </div>

                    <div className="item">
                         <h3>item</h3>
                    </div>
               </div>
          </div>
     )
}



export default Home
