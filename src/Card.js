import React from 'react';

import './index.css';

const Card=(props)=> {
  return (
    <div className={`card ${props.size}`} >
        <img src={props.image_path}></img>
            <h2>{props.name}</h2>
            <p>IMDb rating : {props.body}</p>
        </div>
      

    
  );
}
export default Card