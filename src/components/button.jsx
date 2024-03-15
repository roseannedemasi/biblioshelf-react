import React from "react";
import './Button.css'

import { Link } from "react-router-dom";

function Button({children}) {
    return (
        <div>
            <Link to="/login" className="buttonStyle">{children}</Link>
        </div>
    )
}

export default Button;