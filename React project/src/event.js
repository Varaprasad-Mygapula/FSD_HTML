function Events(){
    const trainees=[{name:'pk',roll:'234'},{name:'vp',roll:'254'}]
    const get=(res)=>{
        res.map((ele,i)=>{
        document.write(i+1 +". "+ele.name+" "+ele.roll+"<br>")});
    };
    return(
        <>
        <h1>Events</h1>
        {/* <button onClick={get}>click this</button> */}
        <button onClick={()=> get(trainees)}>click this</button>

        </>
    )

}

export default Events