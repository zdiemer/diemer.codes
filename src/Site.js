import React, { Component } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import {
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/fontawesome-free-brands";

import Zach from "./zach.png";
import "./site.css";

class Site extends Component {
  render() {
    return (
      <div className="site-content">
        <div className="main-body">
          <img className="zach-img" src={Zach} alt="Zach Diemer" />

          <div className="name">Zachary Diemer</div>

          <div className="main-description">
            Software Engineer. Tinkerer. Lifelong student.
          </div>

          <div className="about-me">
            About Me -->
          </div>
        </div>

        <div className="social">
          <a className="icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/zach_diemer">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>

          <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/zdiemer">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>

          <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/zdiemer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>

          <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zach-diemer/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div >
    );
  }
}

export default Site;
