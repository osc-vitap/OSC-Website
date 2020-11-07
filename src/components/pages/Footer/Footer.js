import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaDiscord
} from 'react-icons/fa';
import OSCLogo from '../../../images/osclogo.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link
              to={
                '//www.youtube.com/watch?v=jxiXvSEsBQw/'
              }
              target="_blank"
            >
              Hacktoberfest 2020
            </Link>
            <Link
              to={
                '//www.youtube.com/watch?v=ytka3OynvWs/'
              }
              target="_blank"
            >
              IdeaOryx Results 2020
            </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Admin</h2>
            <Link to={'//oscexecutiveboard.netlify.app/'} target="_blank">EB Login</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={OSCLogo} className="img"/>
            </Link>
          </div>
          <small className='website-rights'>Open Source Community: VIT-AP © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.facebook.com/vitap.osc/'
              }
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.instagram.com/osc.vitap/'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCL7e5F8GJIkLDKiu5pv2NAw'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.linkedin.com/company/open-source-community-vit-ap'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//discord.gg/2qXPW7NVvN'
              }
              target='_blank'
              aria-label='Discord'
            >
              <FaDiscord />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;