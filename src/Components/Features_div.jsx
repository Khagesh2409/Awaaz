import React from 'react';
import '../CSS/Features.css';

const Card = (props) => {
  return (
    <div className='crd'>
      <img src={props.src} alt={props.name} className='crdimg' />
      <div >
        <h1>{props.name} </h1>
        <p>{props.details}</p>
      </div>
    </div>

  )
}

export default Card;