import React from 'react'
import './SingleContent.css'
import { Link } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';

const SingleContent = ({
  id,
  roundNumber,
  pending_category1_count,
  pending_category2_count,
  pending_category3_count,
  matchNumber,
  location,
  homeTeam,
  group,
  dateUtc,
  awayTeam,
  category1_price,
  category2_price,
  category3_price,
  category1_count,
  category2_count,
  category3_count,
}) => {

  const navigate = useNavigate();

  const navigatereservation = () => {
    navigate('/reservation');
  };
  return (
     <div className='media'>      
       <span className="teams">
          {homeTeam}
       <span className="teams">{awayTeam}</span>
         </span>
    
    <p className='value'><span className='title'>DATE : </span>{dateUtc}</p>
    <p className='value'><span className='title'>ROUND NUMBER : </span>{roundNumber}</p>
    <p className='value'><span className='title'>LOCATION : </span>{location}</p>
    <p className='value'><span className='title'>group : </span>{group}</p>
    <p className='value'><span className='title'>Category 1 Price : </span>{category1_price}</p>
    <p className='value'><span className='title'>Category 2 Price : </span>{category2_price}</p>
    <p className='value'><span className='title'>Category 3 Price : </span>{category3_price}</p>
    <Link to={{
      pathname:`/products/${id}`}}>
        <button className='button'>Reserve Ticket</button>
      </Link>
     {/* <button onClick={navigatereservation} className='button' >Reserve</button> */}



    </div>
  )
}
export default SingleContent