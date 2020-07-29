import React from 'react';
import './Home.css';

import { NavLink } from 'react-router-dom';

const Home = (props) => {
  const styles = {backgroundColor: props.todaysColor}

  return (
    <div className="home" style={styles}>
      <section className='home-nav-section'>
        <h2>today's color: {props.todaysColor}</h2>  
        <NavLink 
          to={`/gallery/${props.todaysColor}`} 
          id={props.todaysColor} 
          onClick={props.fetchArt} 
          className='home-nav'
          style={styles}>
            view today's gallery
        </NavLink>
        <br />
        <NavLink 
          to='/colors' 
          onClick={props.fetchAllColors} 
          className='home-nav'
          style={styles}>
            pick another color
          </NavLink>
        <br />
        <NavLink 
          to='/favorites' 
          className='home-nav'
          style={styles}>
            view my gallery
        </NavLink>
      </section>
    </div>
  )
}

export default Home;