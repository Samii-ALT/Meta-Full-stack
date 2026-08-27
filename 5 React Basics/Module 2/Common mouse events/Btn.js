// function Btn(){
//     const clickHandler = () => console.log("Clicked");
//     return(
//         <button onClick={clickHandler}>Click Me</button>
//     )
// }



function Btn(){
    const clickHandler = () => console.log("Mouse over");
    return(
        <button onMouseOver={clickHandler}>Click Me</button>
    )
}




export default Btn;