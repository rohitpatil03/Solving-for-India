import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import "./nav.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src="new.png" alt="Medisen" width = "280" height = "75"></img>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <a
                  to={"#" + url}
                  key={id}
                  className={text == "Consult Now" ? "order" : "normal"}
                >
                  <li key={id}>{text}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
