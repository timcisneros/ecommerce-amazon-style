import React from 'react';

const NavbarSecondary = () => {
    return (
        <nav className="navbar-secondary">
            <div className="navbar-secondary__links u-flex-row">
                <i className="fas fa-bars u-margin-right-tiny"></i>
                <p className="navbar-secondary__links--primary">All</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Best Sellers</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Prime</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">
                    Customer Service
                </p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">
                    Today's Deals
                </p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">New Releases</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Books</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Find a Gift</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Fashion</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Kindle Books</p>
            </div>
            <div className="navbar-secondary__links">
                <p className="navbar-secondary__links--primary">Gift Cards</p>
            </div>
        </nav>
    );
};

export default NavbarSecondary;
