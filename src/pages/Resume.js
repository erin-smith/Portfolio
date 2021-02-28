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
          <div className="col-lg-6">
            <a className="img-fluid" href={Erin_resume} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" alt="Resume thumbnail" id="thumb"src={resume920}></img>
            </a>
          </div>
          <div className="col-lg-6">
            <img src={self} alt="Erin" id="bio-image" className="img-fluid"/>
          </div>
        </div>
       </div>
       </div>
    );
}

export default Resume; 