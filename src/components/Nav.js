import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <section id="menu">
                <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                    <a className="navbar-brand" href="true">F.edu</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 pr-5">
                        <li className="nav-item active">
                        <a className="nav-link" href="true">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="true">List Note</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </section>

        );
    }
}

export default Nav;