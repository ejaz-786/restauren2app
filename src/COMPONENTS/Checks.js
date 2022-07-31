import React, { Component } from 'react'
import '../CSS/checks.css'

class Checks extends Component {
  render() {
    return (
        <>
        <div className='main'>
           <div className='nav'>
               <div className='logo'>
                  <span><img src='https://www.codester.com/static/uploads/items/000/005/5721/icon.png' alt='ak'/></span>
                  <span id='head-r'>Restaurant App</span></div>
  
               <div id='search-div'>
                <span> <input type='text' id='search'/></span>
                <span>   <button id='inp-btn'>
                <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png' alt='abc'/>
                  </button> </span>
                {/* <div>
                <input type='text' id='search'/>
                </div>
                 <div>
                 <button id='inp-btn'>
                      <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png' alt='abc'/>
                  </button> 
                 </div> */}
                  {/* <input type='text' id='search'/>
                  <button id='inp-btn'>
                      <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png' alt='abc'/>
                  </button> */}
               </div>
  
               <div className='nav-b'>
                  <div>
                      <span><button id='bt-l'>Login</button></span>
                  </div>
    
                 
  
                  <div>
                      <span><button id='bt-s'>SignUp</button></span></div>
               </div>
            
           </div>
  {/* 
           <div className='heading'>
                 <span>premium quality restaurent and dishes !</span>
           </div> */}
  
           <div id='heading' >
        
               premium Quality 
               Restaurant and Dishes 
            Enjoy the food at affordable price 
          </div>
  
          <div className='offer'>
               <div className='div-1'></div>
               <div className='div-1'></div>
               <div className='div-1'></div>
               <div className='div-1'></div>
          </div>
  
      </div>    
       </>
    )
  }
}

export default Checks
