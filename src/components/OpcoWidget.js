import React from "react";
import { Link } from "react-router-dom"; // Import de Link pour la navigation interne
import "./OpcoWidget.css";

function OpcoWidget() {
  const links = [
    {
      label: "Opco Mobilité",
      url: "https://www.opcomobilites.fr/",
    },
    {
      label: "Opco Constructys",
      url: "https://www.constructys.fr/constructys-ile-de-la-reunion/contacts/",
    },
    {
      label: "Opco Akto",
      url: "https://www.akto.fr/",
    },
    {
      label: "Opco Ocapiat",
      url: "https://monespace.ocapiat.fr/#tab2",
    },
    {
      label: "Opco 2i",
      url: "https://www.opco2i.fr/",
    },
  ];

  return (
    <div className="opco-widget">
      <h2 className="opco-title">Liens OPCO</h2>
      <ul className="opco-list">
        {links.map((link, index) => (
          <li key={index} className="opco-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opco-link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bouton pour retourner à l'accueil */}
      <div className="home-button-container">
        <Link to="/" className="home-button">
          Accueil
        </Link>
      </div>
    </div>
  );
}

export default OpcoWidget;
