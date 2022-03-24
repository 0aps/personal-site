import * as React from 'react';
import { section, logo, about, links, social } from './about.module.css';
import profile from '../images/profile.jpeg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';

const About = () => {
  return (
    <section className={section}>
      <div id="logo">
        <img className={logo} src={profile} alt="Logo" />
      </div>
      <div className={about}>
        <h2>Hi</h2>
        <p>I'm a software developer.</p>
      </div>
      <div className={links}>
        <a href="https://github.com/0aps" target="_blank" rel="noopener noreferrer">
          <img className={social} src={github} alt="github" />
        </a>
        <a href="https://twitter.com/0aps" target="_blank" rel="noopener noreferrer">
          <img className={social} src={twitter} alt="twitter" />
        </a>
        <a href="https://linkedin.com/in/ángel-piña-santana-7aa83778" target="_blank" rel="noopener noreferrer">
          <img className={social} src={linkedin} alt="linkedin" />
        </a>
      </div>
    </section>
  );
};

export default About;
