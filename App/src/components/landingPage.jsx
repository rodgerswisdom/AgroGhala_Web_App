import landingPageImage from '../assets/images/landing_page.jpg'

export default function LandingPageSection(){
    return(
        
            <div  className="w-full h-full bg-black">
                <img
                    src={landingPageImage}
                    alt = "landpage"
                    width={'100%'}
                />
            </div>
        
    );
}