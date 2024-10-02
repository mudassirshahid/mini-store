import React from "react";
import { useTheme } from "../../ThemeContext/ThemeContext"; // Adjust the path accordingly

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeToggle;
