import React from 'react';
import data from '../Data/Data';
import './Header.css';

const Header = () =>{
  return(
    <header className='header'>
       <ul className='header-list'>
         <li> <a href='#'> {data[0]} </a> </li>
         <li> <a href='#'> {data[1]} </a> </li>
         <li> <a href='#'> {data[2]} </a> </li>
         <li> <a href='#'> {data[3]} </a> </li>
       </ul>
    </header>
  )
}

export default Header