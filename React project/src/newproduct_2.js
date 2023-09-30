import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
import './product.css';


function Products2(){
    const [data,setData] = useState([]) // const data=[]
    const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products/categories';
    useEffect(()=>{
        getProductlist()
    },[cnt])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    return (
        <>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="">
                            {/* <img src={ele.image} /> */}
                            <button>{ele}</button>
                            {/* <p>{ele.price}</p>
                            <p>{ele.category}</p> */}
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
}
export default Products2