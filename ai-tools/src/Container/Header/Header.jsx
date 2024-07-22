import React from "react";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">AI Tools</span>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span 
                            className="nav-link active" 
                            aria-current="page" 
                        >
                            Home
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}