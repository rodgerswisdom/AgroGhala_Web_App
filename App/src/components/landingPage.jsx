import landingPageImage from '../assets/images/landing_page.jpg'

export default function LandingPageSection(){
    return(
        <>
            <div  className="w-full h-full bg-black relative">
                <img
                    src={landingPageImage}
                    alt = "landpage"
                    width={'100%'}
                />
                <div  className="absolute top-0 left-0 w-full h-full bg-green-600 opacity-20">
                    <div className="">
                        <h1>Jamii Ya Wakulima shupavu</h1>
                        <h2>Mafunzo ya kuboresha kilimo</h2>
                    </div>
                </div>
            </div>
            
            </> 
        
    );
}