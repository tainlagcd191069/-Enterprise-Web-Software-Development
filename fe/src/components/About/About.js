import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { GuestNavLinks } from '../MainNavigation/NavLinks/GuestNavLinks';
import './About.css';

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className='about'>
      <p className='about__bold'>
        <Link to='/' className='about__bold--co hvr-underline'>
          DEV Community
        </Link>{' '}
        is a community that collects personal opinions
      </p>
      <p>
      We are a place where programmers share, update information and develop their careers.
      </p>
      <ul className='about__links'>{!isLoggedIn && <GuestNavLinks />}</ul>
    </div>
  );
};

export default About;
