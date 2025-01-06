import React from "react";
import "./ProcedureWidget.css";

function ProcedureWidget() {
  const procedures = [
    {
      title: "Emargement Session",
      file: "/docs/emargement-session.pdf",
    },
    {
      title: "Emargement RCI",
      file: "/docs/emargement-rci.pdf",
    },
  ];

  return (
    <div className="procedure-widget">
      <h2 className="procedure-title"></h2>
      <ul className="procedure-list">
        {procedures.map((procedure, index) => (
          <li key={index} className="procedure-item">
            <a
              href={procedure.file}
              target="_blank"
              rel="noopener noreferrer"
              className="procedure-link"
            >
              {procedure.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProcedureWidget;
