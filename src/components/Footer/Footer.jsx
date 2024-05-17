import React from "react";
import {
  // FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";

import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        {/* <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul> */}
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
            <FaTwitter />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
            >
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg> */}
          </Link>
          <Link
            to="https://www.linkedin.com/in/monojitdeb"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
