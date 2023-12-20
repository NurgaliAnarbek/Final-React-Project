import React from "react";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <label>
        Dark Mode
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </label>
    </div>
  );
};

export default DarkModeToggle;
