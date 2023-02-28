import React from "react";
import logo from "../images/Fill.png"



export default function Header(){
    return(
        <div>
            <section>
                <header id="header-section">
                    <div className="header-contents">
                        <img src={logo} alt="my logo"></img>
                        <h5>my travel journal.</h5>
                    </div>
                </header>
            </section>
        </div>
    )
}
