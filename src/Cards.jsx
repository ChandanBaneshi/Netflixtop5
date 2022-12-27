import React from 'react'
// created a component names==d  as crd
function Card(props){ 
    return( <>
     <div className='cards'>
     <div className='card' >
       <img src ={props.imgsrc} alt='MY PIC' className='card__img' />
       <div className='card__info'>
       <span className='card__category'>{props.title} </span>
       <h1 className='card__title'>{props.sname} </h1>
       <a href={props.link} target="_blank">
         <button>WATCH NOW</button>
       </a>
       </div>
     </div>
   </div>
   </>);
   }
   export default Card;