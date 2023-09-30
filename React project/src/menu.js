import {Link} from "react-router-dom"
function Menu(){
   return(
   <div style={{textAlign: "center"}}>
    <center>
       <Link to="/">Home </Link> |
       <Link to="about">About </Link> |        
       <Link to="service">Service </Link> |
       <Link to="contact">Contact </Link> |
       <Link to="trainees">Trainees</Link> |
       <Link to="event">Events</Link> |
       <Link to='form'>Form</Link> |
       <Link to='form1'>Form1</Link> |
       <Link to='practice'>Practice</Link> |
       <Link to='hook'>Hooks </Link> |
       <Link to='newproduct'>Products</Link> |
       <Link to='newproduct_2'>Products_2</Link> |
       <Link to='single_product'>Products_3</Link> |

       </center>
    </div>)
}
export default Menu