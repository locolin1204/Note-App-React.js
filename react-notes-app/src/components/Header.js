import React from "react";

const Header = ({ handleToggleDarkMode, handleReset }) => {
    return(
        <div className="header" >
            <h1>Notes</h1>
            <div className="top-right-buttons">
            <button 
                onClick={() => {
                    handleToggleDarkMode(
                            (previousDarkMode) => !previousDarkMode
                        )
                    }
                }
                className="toggle"
                >
                Toggle Mode
                </button>
                <button 
                onClick={() => {handleReset()}}
                className="reset"
                >
                Reset
                </button>
            </div>
        </div>
    )
}

export default Header;