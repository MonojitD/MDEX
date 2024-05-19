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
            <FaTwitter />
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
