import './App.css'; 
import { useEffect, useState, useReducer } from "react";



const reducer = (state, action) => {
    if(action.type === 'Buying_Ingredients') return {money: state.money-10};
    if(action.type === 'Serving_Customer')  return { money: state.money+10};
    if(action.type === 'Celebretiy_Entry')  return {money: state.money+500};
}


function App(){
    const initialState = {money: 100}
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <button onClick={() => dispatch({type: 'Buying_Ingredients'})}>Buy Veggis</button>
            <button onClick={() => dispatch({type: 'Serving_Customer'})}>Serve Food</button>
            <button onClick={() => dispatch({type: 'Celebretiy_Entry'})}>Celebretiy Enters..</button>
        </div>
    )
}

export default App;