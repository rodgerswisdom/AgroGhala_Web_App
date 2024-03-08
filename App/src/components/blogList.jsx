import imageUrl from "../assets/images/fertilizer_pack.webp";
import Spacer from "./spacer";

const BlogList = ()=>{


    return(
        <section className="p-2 m-1.5">
            <h1>Featured</h1><br />
            <div className="fp-2 m-1.5">
                <div className="image">
                    <img
                        src={imageUrl}
                        alt = "corn seeds"
                    /> 
                </div>
               
                <div className="highlight bg-green-100 absolute  h-24 p-2 m-2" >
                    <h2>DK 8031, 8033, 777 and H6213. Which one should you grow in a high altitude area?</h2> 
                </div>
                <Spacer />
                <div className="image">
                    <img
                        src={imageUrl}
                        alt = "fertilizer"
                    /> 
                </div>
                <div className="highlight">
                    <h2>Ni yepi ya kuzingatia ninapochagua ni mbolea ipi nitatumia shambani?</h2> 
                </div>
            </div>
        </section>
    );
}


export default BlogList;