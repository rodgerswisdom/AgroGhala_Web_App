import landingPageImage from '../assets/images/landing_page.jpg'

export default function LandingPageSection(){
    return(
        <>
        <h1>Site under Development</h1>
            <div  className="w-full h-full bg-black relative">
                <img
                    src={landingPageImage}
                    alt = "landpage"
                    width={'100%'}
                />
                <div  className="absolute top-0 left-0 w-1/2 h-full bg-black opacity-50">
                    <div className='text-green-500'>
                        <h1>Jamii Ya Wakulima shupavu</h1>
                        <h2>Mafunzo ya kuboresha kilimo</h2>
                    </div>
                </div>
            </div>
            
            </> 
        
    );
}