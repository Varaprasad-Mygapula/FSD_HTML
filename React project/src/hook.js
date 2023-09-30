import { useState } from "react";

function Hooks(){
    // let cnt=0;
    //let arr=[10,20,30,40];
    const [cnt,setCnt]=useState(0)//const cnt=0; 2nd agr is function name
    const [name,setName] = useState('')//const name="";
    const [arr,setArr] =useState(['apple', 'banana','apple','mango']);
    const [fruitname,setFruitname]=useState('')//fruitname= ''
    const Filterfruits =()=>{
        // console.log(arr)
        // console.log(fruitname)
        let filterderfruits =arr.filter((ele)=>
        {
            return (ele===fruitname)
        }
        )
        if(filterderfruits.length==0){
            setArr(['apple','banana','apple','mango'])
        }
        else{
            setArr(filterderfruits)
        }
    }
    //setCnt(20)=> cnt = 20;
    // const getcount=()=>{
    //     ++cnt;
    //     console.log(cnt)
    // }
return (
    <div>
        <h1>React hooks</h1>
        <p>count is :{cnt} </p>
        <button onClick={()=>setCnt(cnt+1)}>Increament by 1</button>
        <br/>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
        <p> The name is :{name}</p>
        <br/>
        <br/>
        <br/>
        <p>Fruit Finder</p>
        <input type="text" onChange={(e)=>setFruitname(e.target.value)}/>
        <br/>
        <button onClick={Filterfruits}>check fruit</button>
        <br/>
        <ul style={{'display':'inline-block'}}>
            {
            arr.map((ele,i) => {
                return (<li key={i}>{ele}</li>)
            })
        }
        </ul>
    </div>

)
}
export default Hooks