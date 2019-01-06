import React from 'react'
import styled from "styled-components"
import { FaRegFilePdf, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import CVPDF from '../statics/nansCv.pdf'

const CardTitle = styled.h1`
  font-size: 85px;
  font-weight: 700;
  margin-bottom: 5px;
  text-shadow: 1px 1px #000000;
  color: #2196F4;

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 65px;
  }
/* Mobile Layout lower than: 320px. */

  @media only screen and (max-width: 767px) {
   font-size: 36px;
  }

@media only screen and (min-width: 480px) and (max-width: 767px) {
   font-size: 50px;
}
`


const Welcome = styled.div`
    font-size: 24px;
    color: #fff;
    border-top: 5px solid #fff;
		border-left: 5px solid #fff;
		border-right: 5px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 70px 65px;
    position: relative;
    z-index: 1;
    background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.5)); /* Standard syntax (must be last) */

    &::before, &::after {
        position: absolute;
        content: "";
        bottom: 0;
        width: 25%;
        height: 5px;
        background: #fff;
    }

    &::before {
        left: 0;
    }
    &::after {
        right: 0;
    }

@media only screen and (min-width: 768px) and (max-width: 991px) {

	   padding: 40px 60px 55px;
    font-size: 21px;
}
    

/* Mobile Layout lower than: 320px. */

@media only screen and (max-width: 767px) {
  font-size: 18px;
  padding: 30px 30px 45px;

    
        
    
    &::before,&::after {
	width: 5%;
    }


    
}
/* Wide Mobile Layout: 480px. */

@media only screen and (min-width: 480px) and (max-width: 767px) {
    &::before,&::after {
	    width: 15%;
    }
}
`


const Card = () => (
  <Welcome>
    <CardTitle>Nans Gigan</CardTitle>
    <div>Web Developer Full Stack</div>
    <div className="social-links">
      <ul>
        <li><a href={CVPDF} rel="noopener noreferrer" target="_blank"><FaRegFilePdf /></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nans-gigan"><FaLinkedinIn/></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/nansou13"><FaGithub/></a></li>
        <li><a href="mailto:nans@gigan.fr"><FaEnvelope/></a></li>
      </ul>
    </div>
    </Welcome>
)

export default Card
