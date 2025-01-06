import React from "react";

function AppCard({ title, image, link, hideTitle, className }) {
  return (
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
