function Metrics(){
    return(
        <>
       <div className="flex  gap-10 m-10 p-10 justify-center text-center w-full">
            <div className=" w-96 h-96 bg-green-600 m-10 p-10">
            <h1 className="text-black text-9xl">400</h1>
                <h2 className=" text-6xl text-black">Questions by farmers</h2>
            </div>
            <div className=" w-96 h-96 bg-green-600 m-10 p-10">
                <h1 className="text-black text-9xl">1200</h1>
                <h2 className=" text-6xl text-black">Answers by farmers</h2>
            </div>
            <div className=" w-96 h-96 bg-green-600 p-10 m-10">
            <h1 className="text-black text-9xl">250</h1>
                <h2 className=" text-6xl text-black">Summary answersby AgroGhala</h2>
            </div>
            
       </div>
       <div className=" text-center justify-center">
       <h1>We work with a team of experts to guarantee Quality</h1>
       </div>
       </>
    )
}

export default Metrics;