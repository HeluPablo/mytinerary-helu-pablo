import React, { useState } from "react";
import {Link as LinkRoute} from "react-router-dom"

const Navbar = () => {

    const [burguer_class1, setBurguerClass1] = useState("burguer-bar unclicked")
    const [menu_class1, setMenuClass1] = useState("menu hidden")
    const [isMenuClicked1, setIsMenuClicked1] = useState(false)
    const [burguer_class2, setBurguerClass2] = useState("burguer-bar unclicked")
    const [menu_class2, setMenuClass2] = useState("menu hidden")
    const [isMenuClicked2, setIsMenuClicked2] = useState(false)

    const updateMenu1 = () => {
        if (!isMenuClicked1) {
            setBurguerClass1("burguer-bar clicked")
            setMenuClass1("menu1 visible")
        }
        else {
            setBurguerClass1("burguer-bar unclicked")
            setMenuClass1("menu1 hidden")
        }
        setIsMenuClicked1(!isMenuClicked1)
    }

    const updateMenu2 = () => {
        if (!isMenuClicked2) {
            setBurguerClass2("burguer-bar clicked")
            setMenuClass2("menu2 visible")
        }
        else {
            setBurguerClass2("burguer-bar unclicked")
            setMenuClass2("menu2 hidden")
        }
        setIsMenuClicked2(!isMenuClicked2)
    }

    return (
        <>
            <nav>
                <div className="burguer-menu1" onClick={updateMenu1}>
                    <div className={burguer_class1} ></div>
                    <div className={burguer_class1} ></div>
                    <div className={burguer_class1} ></div>
                </div>
                <LinkRoute className="titnav" to="/" > <h2 className="titnav">Turist Life</h2> </LinkRoute>
                <div className="burguer-menu2" onClick={updateMenu2}>
                    <div className={burguer_class2} ></div>
                    <div className={burguer_class2} ></div>
                    <div className={burguer_class2} ></div>
                </div>
            </nav>

            <div className={menu_class1}>
                <LinkRoute to="/" className="navhome">Home</LinkRoute>
                <LinkRoute to="/Cities" className="navcities">Cities</LinkRoute>
                <LinkRoute to="/Hotels" className="navhotels">Hotels</LinkRoute>
            </div>
            <div className={menu_class2}>
            <a href="/signin" className="navhome">Login</a>
                <a href="/signup" className="navcities">Register</a>
            </div>
        </>
    )
}

export default Navbar