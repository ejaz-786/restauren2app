import React, { Component } from "react";
import data from '../RestaurentData.json'

class RestroApp extends Component {
  state = {
    hideshowL: "none",
    hideshowS:"none",
    inp_s_n:null,
    inp_s_e:null,
    inp_s_p:null,

    inptxt:null,
    container:[],
    searchVal:null,
    flag:false
    
  };


  loginfun = ()=>{
    this.setState({
        hideshowL:'block',
        hideshowS:"none"
    })
  }

  signfun = ()=>{
    this.setState({
        hideshowS:'block',
        hideshowL:"none"
    })
  }
  createaccount = ()=>{
   let s_val1 = document.getElementById('name-s').value;
   let s_val2 = document.getElementById('email-s').value;
   let s_val3 = document.getElementById('pass-s').value

   if(s_val1 === '' || s_val2 === '' || s_val3 === ''){
    alert('fill the full details');
   }
   else{
    
    this.setState({
        hideshowL:"block",
        hideshowS:"none",
        inp_s_n:s_val1,
        inp_s_e:s_val2,
        inp_s_p:s_val3,


     })

   }

 
  }

  access = ()=>{

    let l_val1 = document.getElementById('email-l').value;
    let l_val2 = document.getElementById('pass-l').value
   
   
  
    if(l_val1 === this.state.inp_s_e && l_val2 === this.state.inp_s_p){
  
        alert("you can access the app")
    
    }
    else{
        alert("you can not access the app")
    }


  }
//   .........................
inpchange = (event)=>{
    let txt = event.target.value.toLowerCase();

    this.setState({

        inptxt:txt

    },this.callback_fun)

}
callback_fun = ()=>{
    // this.setState({
    //     container:null
    // })
    if(this.state.inptxt!== ''){
        let arr = []
        data.restaurants.map((val)=>{
            let valname = val.name.toLowerCase();
            let valcuisin = val.cuisine_type.toLowerCase();
            let valneighbor = val.neighborhood.toLowerCase();
    
            if(valname.startsWith(this.state.inptxt)){
    
                arr.push(valname);
    
            }
    
           if(valcuisin.startsWith(this.state.inptxt)){
                arr.push(valname)
            }
    
           if(valneighbor.startsWith(this.state.inptxt)){
            arr.push(valname)
           }
          
         
        })
        // console.log(arr);

        this.setState({
            container:arr
            // container:[...this.state.container,...arr]
            
        })

    }
    else{
      this.setState({
        container:[null]
      })
    }

  

}

valueUp =(event)=>{
    let paraVal = event.target.innerHTML;
    document.getElementById('input').value = paraVal;
    this.setState({
      container:[null]
    })
}


filters = ()=>{
   let searchval = document.getElementById('input').value;
   this.setState({
    searchVal:searchval,
    flag:true
   },this.callback_search)


  
}

callback_search = ()=>{
  if(this.state.searchVal !== ''){
    data.restaurants.map((obj)=>{
      if(obj.name.toLowerCase() === this.state.searchVal){
         this.setState({
          name:obj.name,
          cuisine_type:obj.cuisine_type,
          neighborhood:obj.neighborhood,
          image:obj.photograph
         })
      
      }

   })
  }
}
  render() {
    return (
      <>
        <div className="container">
          <button onClick={this.loginfun}>login</button>

          <button onClick={this.signfun}>signup</button>

          <div className="signuppage" style={{display:this.state.hideshowS}}>
            <h3>signup:-</h3>
            name: <input type="text" id="name-s" />
            email: <input type="text" id="email-s" />
            pass: <input type="text" id="pass-s" />
            <button onClick={this.createaccount}>create account</button>
          </div>
      
      {/* ................... */}

          <div className="loginpage" style={{display:this.state.hideshowL}}>
          <h3>signin:-</h3>
  
            email: <input type="text" id="email-l" />
            pass: <input type="text" id="pass-l" />
            <button onClick={this.access}>Access the app</button>
          </div>

          {/* ............... */}
          <div>
            <input type='text' id='input' placeholder="write here" onChange={this.inpchange}/>

             <button onClick={this.filters}>filter</button>
          </div>

          {/* <p>{this.state.container}</p> */}
          <div >
            {this.state.container.map((item)=>{
               return <p id='lid' onClick={this.valueUp}>{item}</p>
          })}
          </div>
       {/* ............................ */}
        {this.state.flag === true ? <div class="card">
                <img src={this.state.image} alt="No Restaurent Found" style={{width:"100%"}}/>
                <div class="container">
                  <h4><b>{this.state.name}</b></h4> 
                  <p>{this.state.neighborhood}</p> 
                </div>
         </div> : <p>NO Restaurent Found !</p> }
        </div>
      </>
    );
  }
}

export default RestroApp;
