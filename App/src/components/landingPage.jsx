import landingPageImage from '../assets/images/landing_page.jpg'

export default function LandingPageSection(){
    return(
        
            <div  className="w-full h-full bg-black">
                <img
                    src={landingPageImage}
                    alt = "landpage"
                    width={'100%'}
                />
                <div  className="w-full h-full bg-white absolute text-center">
                    <div className='text-green-500'>
                        <h1>Jamii Ya Wakulima shupavu</h1>
                        <h2>Mafunzo ya kuboresha kilimo</h2>
                    </div>
                </div>
            </div>
            
        
    );
}