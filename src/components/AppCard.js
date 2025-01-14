import React from "react";
import { Link } from "react-router-dom";

function AppCard({ title, image, link, hideTitle, className }) {
  const isInternalLink = link.startsWith("/");

  return isInternalLink ? (
    <Link to={link} className={`app-card ${className ? className : ""}`}>
      <div className="card-content">
        {image && <img src={image} alt="logo" className="app-icon" />}
        {!hideTitle && <h2 className="card-title">{title}</h2>}
      </div>
    </Link>
  ) : (
    <a
      href={link}
      className={`app-card ${className ? className : ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-content">
        {image && <img src={image} alt="logo" className="app-icon" />}
        {!hideTitle && <h2 className="card-title">{title}</h2>}
      </div>
    </a>
  );
}

export default AppCard;
