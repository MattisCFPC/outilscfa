import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import de BrowserRouter
import AppHeader from "./components/AppHeader";
import AppCard from "./components/AppCard";
import ToDoWidget from "./components/ToDoWidget";
import ProcedureWidget from "./components/ProcedureWidget";
import UsefulLinksWidget from "./components/UsefulLinksWidget";
import OpcoWidget from "./components/OpcoWidget";
import "./App.css";
import mondayLogo from "./assets/monday.png";

function App() {
  const apps = [
    {
      title: "Monday",
      image: mondayLogo,
      link: "https://cfpc-georges-hoareau.monday.com/boards/1667242607",
      hideTitle: true,
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
      title: "SITE CFA",
      image: null,
      link: "https://cfa.georgeshoareau.re",
    },
    {
      title: "Opco",
      image: null,
      link: "/opco", // Redirige vers la page Opco
    },
  ];

  return (
    <Router>
      <div className="app-container">
        <AppHeader />

        <Routes>
          {/* Page principale */}
          <Route
            path="/"
            element={
              <>
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
                <div className="widgets-container">
                  <div className="todo-section">
                    <ToDoWidget />
                  </div>
                  <div className="procedure-section">
                    <ProcedureWidget />
                  </div>
                  <div className="links-section">
                    <UsefulLinksWidget />
                  </div>
                </div>
              </>
            }
          />

          {/* Page Opco */}
          <Route path="/opco" element={<OpcoWidget />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
