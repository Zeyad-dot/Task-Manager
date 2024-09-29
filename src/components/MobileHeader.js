import React from 'react'

export default function MobileHeader( {darkMode, toggleDarkMode} ) {

    return(
        <div className="mobile-header">
            <h1 className="mobile-title">Task Master</h1>
            <button className="mobile-dark-mode-btn" onClick={toggleDarkMode}>
              <img
                className="icon"
                src={
                  darkMode
                    ? `${process.env.PUBLIC_URL}/sun.png`
                    : `${process.env.PUBLIC_URL}/moon.png`
                }
                alt="dark mode icon"
              />
            </button>
          </div>
    )
}