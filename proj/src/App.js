import React from 'react';
import './App.css';
import data from './data.json';
import profileIcon from './facebook.svg';
import womanIcon from './github.svg';
import Resume from './Resume';
import {BrowserRouter,Route,Link} from 'react-router-dom';

let App=()=>{
  
  return(
    <div>
      <header> <h2> Resume building </h2> </header>

      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume}/>
      </BrowserRouter>
    </div>
  )
}
let Home=()=>{
  let profiles=data.profiles;
  return(
    <section className="parent">
          {profiles.map((value,index)=>(
            <article className="child" key={index}>
            {value.basics.gender==="male" ? <img src={profileIcon} alt="Profile icon"/> : <img src={womanIcon} alt="Woman icon"/>}
            <br />
              <h3 className="name"> {value.basics.name} </h3>
              <h4> {value.basics.role} </h4> <hr />
          <a href={"mailto:"+value.basics.email} className="link">  {value.basics.email} </a>
          <a href={"tel:"+value.basics.mobile} className="link">  {value.basics.mobile} </a>
          <p> {value.basics.address}</p>
            <Link to={{pathname:"/resume", data:{id:index}}} className="button"> View profile </Link>
            </article>
          ))}
      </section>
  )
}

export default App;
