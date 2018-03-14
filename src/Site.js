import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import {
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/fontawesome-free-brands";

import { faHeart } from "@fortawesome/fontawesome-free-solid";

import Zach from "./resources/images/zach.png";
import ZachNYC from "./resources/images/zach-nyc.jpg";
import "./resources/styles/site.css";

class Site extends Component {
  render() {
    return (
      <div className="site-content">
        <div className="main-body">
          <div className="basic-information">
            <img className="zach-img" src={Zach} alt="Zach Diemer" />

            <div className="name">Zachary Diemer</div>

            <div className="main-description">
              Software Engineer. Tinkerer. Lifelong student.
            </div>
          </div>

          <div className="separator" />

          <div className="about-me-body">
            <h1>About Me</h1>
            <div className="about-me-content">
              <p><span style={{ "font-family": "monospace", "font-weight": "bold" }}>Hello World!</span> My name is Zachary Diemer, and I'm a software engineer. I graduated from <span style={{ color: "#782f40", background: "#ceb888", "padding-left": "0.25em", "padding-right": "0.25em" }}>Florida State University</span> with a Bachelor's of Science in Computer Science in 2016 and have been knee-deep in code ever since. I consider myself a generalist when it comes to software engineering, and strive to understand as many aspects of the craft as I can--despite the impossibility of such an undertaking. I aspire to write code that has a real and positive impact on the world.</p>

              <img className="zach-nyc" src={ZachNYC} alt="Zach Diemer in NYC" />

              <p>I've always been fascinated by <span style={{ "text-decoration": "underline !important" }}>how things work</span>, and that fascination has permeated into every facet of my life. I currently spend my work days writing code in JavaScript, Node.js, and Python. In my free time, I enjoy tinkering with everything from my collection of Raspberry Pis to optimizing a Minecraft server. Technology defines a big part of who I am, and I'm grateful for the opportunity to embrace it daily.</p>

              <p>Currently, I work as a software engineer at Nielsen in Tampa, FL. Here at Nielsen I've been granted the opportunity to work on a number of exciting projects and I've been exposed to plenty of new technology stacks. Not to mention the wonderful people I've had the privilege and pleasure of working with! I've been able to work on projects as varied as React web applications, Chrome extensions, cloud architecting, and more. It's been a valuable experience so far, and I'm hopeful that the future will bring many more interesting and unique projects.</p>

              <p>Aside from Nielsen, I've also worked previously at Rating Dynamics in Tallahassee, FL, where I worked extensively with C#, .NET Framework, and ASP.NET. As my first foray into the field of professional software development, I was exposed to what it's like to actually work in a professional environment, and the lessons I learned from there are lessons that will stick with me for a long time throughout my career. Working on a small team engenders (and requires) a great degree of trust and respect, and Rating Dynamics was certainly a place where I felt a mutual sense of each of these.</p>

              <p>Software development isn't the only aspect of my character. I'm also an avid reader, board gamer, and disc golfer. My Kindle and I are often inseparable, and hardly a weekend goes by without either board gaming or throwing a round of disc golf. I find it valuable to be a balanced individual in every aspect of life, so being pursuing hobbies and growth outside of my career is something which I take extremely seriously.</p>

              <p>I'd love to hear from you if you want to know anything else about me, or if you'd like to chat!</p>
            </div>

            <div className="contact">
              <div className="method" id="phone">(850) 509-1236</div>
              <div className="method" id="email"><a href="mailto:zach@diemer.codes?Subject=Hello%20Zach!" target="_top">zach@diemer.codes</a></div>
            </div>
          </div>

          <div className="footer">
            Hand crafted with <FontAwesomeIcon icon={faHeart} /> by Zachary Diemer
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
