import React from "react";
import AppHeader from "./components/AppHeader";
import AppCard from "./components/AppCard";
import ToDoWidget from "./components/ToDoWidget";
import ProcedureWidget from "./components/ProcedureWidget";
import "./App.css";
import mondayLogo from "./assets/monday.png"; // Assure-toi que ce logo existe

function App() {
  const apps = [
    {
      title: "Monday",
      image: mondayLogo,
      link: "https://cfpc-georges-hoareau.monday.com/boards/1667242607",
      hideTitle: true, // Cache le titre pour ce bouton
    },
    {
      title: "EMARGEMENT RCI",
      image: null,
      link: "https://emargement-rci.vercel.app/",
    },
    {
      title: "EMARGEMENT SESSION",
      image: null,
      link: "https://emargement.vercel.app/",
    },
    {
      title: "SITE CFA", // Nouveau bouton
      image: null,
      link: "https://cfa.georgeshoareau.re",
    },
  ];

  return (
    <div className="app-container">
      <AppHeader />

      {/* Section des applications */}
      <h2 className="app-section-title">Toutes les applications</h2>
      <div className="app-grid">
        {apps.map((app, index) => (
          <AppCard
            key={index}
            title={app.title}
            image={app.image}
            link={app.link}
            hideTitle={app.hideTitle}
          />
        ))}
      </div>

      {/* Conteneur pour les widgets alignés */}
      <div className="widgets-container">
        {/* Section Liste des Tâches */}
        <div className="todo-section">
          <h2 className="widget-title">Liste des Tâches</h2>
          <ToDoWidget />
        </div>

        {/* Section Fiches de Procédures */}
        <div className="procedure-section">
          <h2 className="widget-title">Fiches de Procédures</h2>
          <ProcedureWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
