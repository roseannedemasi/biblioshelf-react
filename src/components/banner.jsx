import React from "react";

function Banner() {
    return (
        <div style={containerStyle}>
            <h2 style={h2Style}>BiblioShelf</h2>
            <p style={pStyle}>Explore e organize</p>
        </div>
    )
}

const containerStyle = {
    position: 'absolute', 
    top: '60%',
    left: '150px',
    marginLeft: '180px',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    width: '35%',
    borderRadius: '0 50px 0 0',
    padding: '30px'
}

const h2Style = {
    color: '#A9A9A9',
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '50px', 
    marginLeft: '50px',
    textAlign: 'left',
    fontWeight: 'bold',
    margin: '0 50px 0'
}

const pStyle = {
    color: '#A9A9A9',
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '20px',
    marginLeft: '50px',
    textAlign: 'left',
    fontWeight: 'bold',
    margin: '0 50px 0'
}

export default Banner;