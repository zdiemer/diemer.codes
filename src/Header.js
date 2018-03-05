import React, { Component } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./header.css";

import {
    faTwitterSquare,
    faFacebookSquare,
    faGithubSquare,
    faLinkedin
} from "@fortawesome/fontawesome-free-brands";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">Zachary Diemer</div>

                <div className="links">
                    <a className="link" href="/work">Work</a>
                    <a className="link" href="/about">About</a>
                    <a className="link"
                        style={{ "border-right": "none" }}
                        href="/contact">Contact</a>
                </div>

                <div className="social">
                    <a className="icon" href="https://twitter.com/zach_diemer">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>

                    <a className="icon" href="https://www.facebook.com/zdiemer">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>

                    <a className="icon" href="https://github.com/zdiemer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>

                    <a className="icon" href="https://www.linkedin.com/in/zach-diemer/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div >
        );
    }
}

export default Header;