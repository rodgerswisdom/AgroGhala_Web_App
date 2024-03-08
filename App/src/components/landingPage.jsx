import landingPageImage from '../assets/images/landing_page.jpg'

export default function LandingPageSection(){
    return(
        <>
       <div  className="w-full h-full bg-black relative">
                <img
                    src={landingPageImage}
                    alt = "landpage"
                    width={'100%'}
                    height={'100%'}
                />
                <div  className="absolute top-0 left-0 w-full h-full bg-green-600 opacity-20"></div>
                <div className="absolute top-0 left-0 w-3/5 h-full bg-white transform origin-top-left -skew-x-12 text-center ">
                    <h1 className='text-black'><b>Jamii Ya </b><b className='text-green-600'>Wakulima shupavu</b></h1>
                    <h2 className='text-green-600'><b>Mafunzo </b><b className='text-black'>ya kuboresha kilimo</b></h2>
                    <p>Test</p>

                    {/* landing page button */}
                    <div >
                        <button className=' bg-green-600 w-3/4'>Je, una swali? Uliza na utajibiwa</button>
                    </div>
                </div>
            </div>
            </> 
        
    );
}