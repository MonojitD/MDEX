import React from "react";
import {
  // FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import takeLove from '../../assets/md-sticker.png'

import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";

import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          As a devoted moviemaniac, I've brought my passion for cinema to life
          in this space. Discover a curated collection of films and series, from
          blockbusters to hidden gems, celebrating the magic of storytelling.
          Dive into a world where every frame is a journey, every scene an
          adventure. Join me on this cinematic odyssey, where the love for
          movies and series knows no bounds. Lights, Camera, Action ! Welcome to{" "}
          <b>MDEX</b>- Movie-Doobie EntertainmentX.
        </div>
        <div className="socialIcons">
          <Link
            to="https://github.com/MonojitD"
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.instagram.com/monojit.deb/"
            target="_blank"
            className="icon"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://twitter.com/monojitdeb1"
            target="_blank"
            className="icon"
          >
            {/* <FaTwitter /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="aoigmmxtgl4m3uxg16v5ojfgjsu6kq1f" class="octicon"><title id="aoigmmxtgl4m3uxg16v5ojfgjsu6kq1f">X</title>
              <g clip-path="url(#clip0_1668_3024)">
              <path d="M9.52217 6.77143L15.4785 0H14.0671L8.89516 5.87954L4.76437 0H0L6.24656 8.8909L0 15.9918H1.41155L6.87321 9.78279L11.2356 15.9918H16L9.52183 6.77143H9.52217ZM7.58887 8.96923L6.95596 8.0839L1.92015 1.03921H4.0882L8.15216 6.7245L8.78507 7.60983L14.0677 14.9998H11.8997L7.58887 8.96957V8.96923Z" fill="currentColor"></path>
              </g>
              <defs>
              <clipPath id="clip0_1668_3024">
              <rect width="16" height="16" fill="white"></rect>
              </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            to="https://www.linkedin.com/in/monojitdeb"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </Link>
        </div>
        <img src={takeLove} className="sticker" alt="Made with love by Monojit" />
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
