import React from "react";
import "./styles.css";
import self from "../images/self.jpg";
import resume920 from "../images/resume920.png";
import Erin_resume from "../Files/Erin_resume.pdf";


function Resume() {
    return (
        <div className="altCover">
        <div classNameName="container-fluid" id="resumeBox">
        <div className="row pt-4 pb-4">
          <div className="col-lg-6" id="resumeImg">
            <h2 id="grey" className="mb-5">Click Resume to Print PDF</h2>
            <a className="img-fluid" href={Erin_resume} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" alt="Resume thumbnail" id="thumb"src={resume920}></img>
            </a>
          </div>
          <div className="col-lg-6" id="contact-info">
            <h2 id="grey" className="mb-2">Contact info</h2>
            <ul className="list-inline">
            <li className="list-inline-item"><a id="pink" href="mailto:erin.acumen@gmail.com"><i className="fas fa-at"></i>erin.acumen@gmail.com</a></li>
            <li className="list-inline-item"><a id="pink" href="https://github.com/erin-smith" target="_blank" rel="noopener noreferrer" alt="Github" height="40px"><i
              className="fab fa-github"></i>erin-smith</a></li>
            <li className="list-inline-item"><a id="pink" href="https://www.linkedin.com/in/erin-c-smith/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" height="40px"><i
              className="fab fa-linkedin"></i>My Profile</a></li>
            </ul>
            <img src={self} alt="Erin" id="bio-image" className="img-fluid"/>
          </div>
        </div>
       </div>
       </div>
    );
}

export default Resume; 