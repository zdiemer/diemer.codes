import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

import {
    faTwitterSquare,
    faFacebookSquare,
    faGithubSquare,
    faLinkedin,
    faReact,
    faChrome,
    faGoogle
} from "@fortawesome/fontawesome-free-brands";

import { faHeart } from "@fortawesome/fontawesome-free-solid";

import Zach from "./resources/images/zach.png";
import ZachNYC from "./resources/images/zach-nyc.jpg";
import SF from "./resources/images/sf.jpg";
import "./resources/styles/site.less";

export class DiemerCodes extends Component {
    render() {
        return (
            <SiteContainer>
                <BodyContainer>
                    <Header>
                        <HeaderImage
                            src={Zach}
                            alt="Zach Diemer"
                        />
                        <HeaderName>
                            Zachary Diemer
                        </HeaderName>
                        <HeaderDescription>
                            Software Engineer. Tinkerer. Lifelong student.
                        </HeaderDescription>
                    </Header>

                    <div className="separator" />

                    <div className="about-me-body">
                        <h1>About Me</h1>
                        <div className="about-me-content">
                            <p><span style={{ "font-family": "monospace", "font-weight": "bold" }}>Hello World!</span> My name is Zachary Diemer, and I'm a software engineer. I graduated from <span style={{ color: "#782f40", background: "#ceb888", "padding-left": "0.25em", "padding-right": "0.25em" }}>Florida State University</span> with a Bachelor of Science in Computer Science in 2016 and have been knee-deep in code ever since. I consider myself a generalist when it comes to software engineering, and strive to understand as many aspects of the craft as I can--despite the impossibility of such an undertaking. I aspire to write code that has a real and positive impact on the world.</p>

                            <img className="zach-nyc" src={ZachNYC} alt="Zach Diemer in NYC" />

                            <p>I've always been fascinated by <span style={{ "text-decoration": "underline !important" }}>how things work</span>, and that fascination has permeated into every facet of my life. I currently spend my days writing code in C# and React <FontAwesomeIcon style={{ opacity: 0.5 }} icon={faReact} />. In my free time, I enjoy tinkering with everything from my collection of Raspberry Pis to optimizing a Minecraft server. Technology defines a big part of who I am, and I'm grateful for the opportunity to embrace it daily.</p>

                            <p>Currently, I work at Google <FontAwesomeIcon style={{ color: "#4885ed" }} icon={faGoogle} /> as a software engineer on <a target="_blank" rel="noopener noreferrer" href="https://www.kaggle.com">Kaggle</a> in San Francisco, CA. I've only recently begun my Google journey, but I'm excited to see where the road leads.</p>

                            <p>In the past, I've worked as a software engineer at <span style={{ color: "white", background: "#00aeef", "padding-left": "0.25em", "padding-right": "0.25em" }}>Nielsen</span> in Tampa, FL and <span style={{ color: "#037ea9", background: "#bad13b", "padding-left": "0.25em", "padding-right": "0.25em" }}>Rating Dynamics</span> in Tallahassee, FL. At Nielsen I worked on projects as varied as React <FontAwesomeIcon style={{ opacity: 0.5 }} icon={faReact} /> web applications, Chrome <FontAwesomeIcon style={{ opacity: 0.5 }} icon={faChrome} /> extensions, cloud architecting, and more. At Rating Dynamics, I worked extensively with C#, .NET Framework, and ASP.NET.</p>

                            <p>Software development isn't the only aspect of my character. I'm also an avid reader, board gamer, and disc golfer. My Kindle and I are often inseparable, and hardly a weekend goes by without either board gaming or throwing a round of disc golf. I find it valuable to be a balanced individual in every aspect of life, so being able to pursue hobbies and growth outside of my career is something which I take extremely seriously.</p>

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

                </BodyContainer>
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
            </SiteContainer>
        );
    }
}

const Styles = {
    Color: {
        Black: "#202020",
        White: "#E9E9E9",
        Yellow: "#EAC67A",
        Gray: "#595959",
    },
    Font: {
        FontFamilyFiraCode: "'Fira Code', sans-serif",
    },
}

const SiteContainer = styled.div`
    display: flex;
    width: 100%;
    background: ${Styles.Color.Black};
    color: ${Styles.Color.White};
    font-family: ${Styles.Font.FontFamilyFiraCode};
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;

    &::after {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(${SF}) 100% center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        opacity: 0.5;
        z-index: -1;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const HeaderImage = styled.img`
    flex: 1 0 0;
    width: 20rem;
    border: 2px solid ${Styles.Color.White};
    border-radius: 50%;
`;

const typing = keyframes`
    from {
        width: 0;
    }
`;

const blinkCaret = keyframes`
    50% {
        border-color: transparent;
    }
`;

const HeaderName = styled.div`
    margin: 0 auto;
    width: 14ch;
    flex: 1 0 2ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.1rem solid ${Styles.Color.Yellow};
    animation: ${typing} 2s steps(14, end),
        ${blinkCaret} 0.5s step-end infinite alternate;
    font-size: 5vh;
`;

const HeaderDescription = styled.div`
    flex: 1 0 0;
    margin-top: 1rem;
    font-style: italic;
    color: ${Styles.Color.Yellow};
    border: 1px dashed ${Styles.Color.Gray};
    padding: 0.5rem;
`;

const Divider = styled.div`

`;

const AboutMeContainer = styled.div`

`;

const AboutMeHeader = styled.h1`

`;

const AboutMeContent = styled.div`

`;

const AboutMeContentParagraph = styled.p`

`;

const AboutMeContentImage = styled.img`

`;

const AboutMeContentHighlight = styled.span`

`;

const AboutMeContentLink = styled.a`

`;

const AboutMeContact = styled.div`

`;

const AboutMeContactPhone = styled.div`

`;

const AboutMeContactEmail = styled.div`

`;

const AboutMeContactEmailLink = styled.a`

`;

const Icon = styled(FontAwesomeIcon)`

`;

const SiteFooter = styled.div`

`;

const SocialContainer = styled.div`

`;

const SocialLink = styled.a`

`;