import Name from './3a.jpg';
function Home(){
    //internal css
    let styl={
        background:'green',
        color:'red',
        marginTop:'40px'
    }
    
    return (
    <div style={styl}>
    <h1>This is Home page</h1>
    <img src={Name} ></img>
    </div>
    );
}
export default Home