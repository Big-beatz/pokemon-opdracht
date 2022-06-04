import React from 'react'

function Button({children, clickHandler, disabled}) {
    return (
        <button
            type="button"
            className="navButton"
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button