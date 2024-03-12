function Metrics(){
    return(
       <div className="flex  gap-10 m-10 p-10 justify-center text-center w-full">
            <div className=" w-96 h-96 bg-green-600 m-10 p-10">
            <h1 className="text-black text-9xl">400</h1>
                <h2>Questions by farmers</h2>
            </div>
            <div className=" w-96 h-96 bg-green-600 m-10 p-10">
                <h1 className="text-black text-9xl">1200</h1>
                <h2>Answers by farmers</h2>
            </div>
            <div className=" w-96 h-96 bg-green-600 p-10 m-10">
            <h1 className="text-black text-9xl">250</h1>
                <h2>Summary answersby AgroGhala</h2>
            </div>
       </div>
    )
}

export default Metrics;