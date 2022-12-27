// cslculator in react
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(
//   <><App/></>,document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
  <>
  
    <h1 className='heading_style'>top 6 netflix series </h1>
   
   
    {Sdata.map( (val) =>{
      return(
        <Card imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link = {val.link}
        />
      )
    } )}
  </>,document.getElementById('root')
);