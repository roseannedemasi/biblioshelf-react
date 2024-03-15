import React from "react";
import Button from "../components/button";

function Login() {
    return (
        <div>
            <h1 style={loginStyle}>Tela de Login</h1>
            <Button>Voltar</Button>
        </div>
    )
}

const loginStyle = {
    color: '#fff'
}

export default Login