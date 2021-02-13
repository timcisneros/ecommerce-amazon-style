import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>$pendify</h1>
            </div>
            <div className="navbar__links">
                <p className="navbar__links--primary u-margin-left-small">
                    Hello
                </p>
                <div className="u-flex-row">
                    <i className="fas fa-map-marker-alt  u-margin-right-tiny"></i>
                    <p className="navbar__links--sub">Selection your address</p>
                </div>
            </div>
            <div className="navbar__search">
                <div className="u-flex-row navbar__search--container">
                    <div className="navbar__search--dropdown">
                        All
                        <i className="fas fa-sort-down navbar__search--dropdown-icon"></i>
                    </div>
                </div>
                <input className="navbar__search--input" />
                <div className="navbar__search--icon">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="navbar__links">
                <i className="fas fa-flag-usa u-margin-right-tiny"></i>
                <i className="fas fa-sort-down"></i>
            </div>
            <div className="navbar__links">
                <p className="navbar__links--primary">Hello, Sign in</p>
                <p className="navbar__links--sub">{'Account & Lists'}</p>
            </div>
            <div className="navbar__links">
                <p className="navbar__links--primary">Returns</p>
                <p className="navbar__links--sub">{'& Orders'}</p>
            </div>
            <div className="navbar__links">
                <i className="fas fa-shopping-cart"></i>
                <p className="navbar__links--sub">Cart</p>
            </div>
        </nav>
    );
};

export default Navbar;
