import React from "react";
import socialmediaList from "../data/socialmediaList";

const Footer = () => {
  return (
    <footer id="footer" name="footer">
      <div className="grid">
        <p className="copyright">Copyright 2023 @ Cosmo Junkie</p>
        <ul className="social">
          {socialmediaList.map((socialmedia, index) => {
            return (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={socialmedia.link}>
                  <img src={socialmedia.logo} alt={socialmedia.title} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
