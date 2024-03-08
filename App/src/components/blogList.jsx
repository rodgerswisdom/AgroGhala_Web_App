const BlogList = ()=>{

    const imageUrl = 'https://www.istockphoto.com/photo/green-plastic-bottles-with-non-freezing-cleaning-liquid-gm1329468282-413185287?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffertilizer-packs&utm_medium=affiliate&utm_source=unsplash&utm_term=fertilizer+packs%3A%3A%3A';

    return(
        <section>
            <h1>Featured</h1><br />
            <div className="featured">
                <div className="image">
                    <img
                        src={imageUrl}
                        alt = "corn seeds"
                    /> 
                </div>
                <div className="highlight">
                    <h2>DK 8031, 8033, 777 and H6213. Which one should you grow in a high altitude area?</h2> 
                </div>
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