import React from "react";
import "./styles.css";
import erin from "../images/erin.jpg";


function About() {
  return (
    <div className="container my-4 mt-5">
      <div className="row">
        <div className="col-md-6 mr-6 mt-5">
            <img src={erin} alt="Erin" id="erin1" className="img-fluid"/>
        </div>
        <div className="col-md-6 ml-6 mb-6 mt-5" id="from">
            <h3>About Me</h3>
              <p>
          Greetings! I hail from Oklahoma- the heart of "Tornado Alley".</p><p>I grew up playing: <span
            className="font-italic">Myst, Sim City, Lemmings and Glider.</span>&nbsp;
          I love coding, math, music, literature, writing, and art.
          My obsessions with puzzles, problem-solving, and helping others drive me.  I am passionate about coding- it combines what I love! 
             </p>
              <p>
          A Full-Stack Web Developer for hire, I enjoy JavaScript, jQuery, ES6, React, Node, Express, API's, JSON, AJAX, MySQL, MongoDB, Git, and Heroku.  I'm adept at HTML, CSS, Bootstrap, and other CSS frameworks. Always more to come- I am a life-long learner!</p>
              <p> Profession: I have a decorated decade of experience managing restaurants and cafés. I build inspired,
           sustainable teams. I put people first and excel at communication.</p> <p>
          Optimistic about finding a new career- in the Tech world, I hope to work my way up from a developer position and one day
          combine my skill-sets: Leadership in Tech.
          I am hopeful, hard-working, passionate and driven.
             </p>
               <h2 className="sign">Erin</h2>
               </div>
          </div>
      </div>
  );
}

export default About; 