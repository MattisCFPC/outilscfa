import React from "react";
import "./UsefulLinksWidget.css";

function UsefulLinksWidget() {
  const links = [
    {
      label: "Saisie Cerfa",
      url: "https://contrat.apprentissage.beta.gouv.fr/",
    },
    {
      label: "Recherche Opco entreprise",
      url: "https://www.cfadock.fr/",
    },
    {
      label: "Niveau prise en charge par l’Opco",
      url: "https://www.francecompetences.fr/referentiels-et-bases-de-donnees/",
    },
    {
        label : "Simulateur cout apprenti",
        url: "https://www.alternance.emploi.gouv.fr/simulateur-alternant/etape-1",
    },
    {
      label: "Coût apprenti (maj)",
      url: "https://www.canva.com/design/DAGSZLFR8z8/AQ6t-os5DutWyI9Qmesyvw/edit",
    },
  ];

  return (
    <div className="useful-links-widget">
      <h2 className="links-title">Liens Utiles</h2>
      <ul className="links-list">
        {links.map((link, index) => (
          <li key={index} className="links-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsefulLinksWidget;
