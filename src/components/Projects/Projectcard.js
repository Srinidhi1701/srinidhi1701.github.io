  import React,{useState} from 'react';
  import './index.scss';

  const Card = (props) => {
      return (
          <div className="card" >
            <img src={props.imageUrl} alt={props.title} />
            <div className="card-content">
              <h2 className='card-title'>{props.title}</h2>
              <h2 className='card-date'>{props.date}</h2>
              <h2 className='card-tools'>{props.tools}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        );
      };





  export default Card;