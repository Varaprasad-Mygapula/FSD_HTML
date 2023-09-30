import React,{Component} from "react";

// function About(props){
    class about extends Component{
     render(){
    return (
    <div  style={{background:'blue',color:'white'}}>
    <h1>This is About page {this.props.name}</h1>
        <ol>
        <li>sandeep</li>
        <li>vara</li>
        </ol>
    </div>
    )
     }
}
export default about