import { useEffect, useState } from "react";

const ColorMode = () => {

  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandle = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])
  return (
    <div>
      <button type="button" className="absolute top-1/2 right-3 z-50" onClick={darkModeHandle}>
        <p className="p-2 shadow-lg shadow-gray-600 rounded-full text-xl">{darkMode ? "☀️" : "🌙"}</p>
      </button>
    </div>
  )
}

export default ColorMode;