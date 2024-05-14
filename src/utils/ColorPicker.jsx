import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ColorPicker() {
  const [isLight, setIsLight] = useState(true); // Initial state: light theme

  useEffect(() => {
    changePalette(isLight);
  }, [isLight]); // Update palette on state change

  const changePalette = (isLightTheme) => {
    const body = document.body;
    body.classList.remove("dark", "light"); // Remove both classes for clarity
    body.classList.add(isLightTheme ? "light" : "dark");
  };

  const toggleTheme = () => {
    setIsLight((prevIsLight) => !prevIsLight); // Toggle state and update palette
  };

  return (
    <div className="color-picker">
      <button
        className="color-picker-button"
        id="toggle-button"
        onClick={toggleTheme}
      >
        {isLight ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
