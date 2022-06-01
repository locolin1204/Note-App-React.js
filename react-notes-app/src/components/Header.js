import React from "react";

const Header = ({ handleToggleDarkMode, handleReset, handleDeleteAll }) => {
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

                <button 
                onClick={() => {handleDeleteAll()}}
                className="reset"
                >
                Delete All
                </button>

            </div>
        </div>
    )
}

export default Header;