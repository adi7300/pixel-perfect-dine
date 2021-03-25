import React from 'react'

export default function Header() {
    return (

        <div className="header">
            <img className="header-logo" src={require("../assets/img/logo.svg").default} />
            <div className="header-text">
                <p className="header-title">Exquisite dining since 1989</p>
                <p className="header-desc">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
                    the comfort of our farmhouse.</p>
                <button className="btn-book">Book a table</button>
            </div>
            <img className="hl-header-img" src={require("../assets/img/homepage/hero-bg-desktop.jpg").default} />
        </div>
    )
}
