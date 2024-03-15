import React from 'react';
import Button from './button';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>Sua biblioteca, sua jornada.</h1>
            <Button>Login</Button>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    padding: '10px',
    width: '100%',
    position: 'absolute',
    top: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const h1Style = {
    color: '#A9A9A9',
    marginLeft: '90px',
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '20px'
}

export default Header;