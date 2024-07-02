import React from 'react';
import proj_img from '../../Image/proj_img.png';
import Githubcomp from './Githubcomp';
import './ProjHome.css';
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>Projects & Experiences</h3>
          <p>
            Here are some of projects that I built.<br/>
            Also you should check all of projects on my Github. :)
          </p>
          <Githubcomp
            backgroundColor="#512da8"
            shadow="#482e87 0px 0px 9px"
            href="https://github.com/golangman0523"
          />
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
