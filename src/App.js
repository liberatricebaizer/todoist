import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { SelectedProjectProvider } from "./context";
import { ProjectsProvider } from "./context/projects-contex";
export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
