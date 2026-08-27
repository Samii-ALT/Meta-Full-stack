// function Btn(){
//     return(
//         <button onMouseOver={function() {console.log("First inline Example")}}>
//             An inline anonymous ES5 function event handler
//         </button>
//     )
// }


function Btn(){
    return(
        <button onMouseOver={() => console.log("Second inline Example")}>
            An inline anonymous ES6 function event handler
        </button>
    )
}



export default Btn;