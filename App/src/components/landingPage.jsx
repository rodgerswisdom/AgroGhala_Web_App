import React from "react";
import mainImage from "../assets/images/landing_page.jpg"


export default function LandingPageSection(){
    return(
        <>
            <div className="w-full h-full flex justify-center items-center bg-black" >
                <img src={mainImage} alt="main-image" className="object-cover" />
            </div>
        </>
    );
}