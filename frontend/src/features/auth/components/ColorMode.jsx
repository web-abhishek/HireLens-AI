import React, { useEffect, useState } from 'react'

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
          <button className='border-2 rounded p-3 m-3 cursor-pointer' onClick={darkModeHandle}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
        {console.log(darkMode)}
          </button>
        </div>
  )
}

export default ColorMode