import React from "react";
import { Link } from "react-router-dom";

export default function NavBarLink({ to, sx, children }) {


    return (
        <Link to={to} style={{ textDecoration: "none", color: "black", ...sx }}>
            {children}
        </Link>
    );
}
