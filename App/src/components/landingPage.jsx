import React from "react";
import mainImage from "../assets/images/landing_page.jpg"
import "../App.css"

export default function LandingPageSection(){
    return(
        <>
            <div  className="land-page" style={{ backgroundImage: `url(${mainImage})` }}>
                <h1>Hello</h1>
            </div>
        </>
    );
}