import React from "react";

function Button({children}) {
    return (
        <div>
            <button style={buttonStyle}>{children}</button>
        </div>
    )
}

const  buttonStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    fontFamily: '"Roboto Mono", monospace',
    fontWeight: 'bold'
}

buttonStyle[':hover'] = {
    backgroundColor: '#fff',
    color: 'black'
}

export default Button;