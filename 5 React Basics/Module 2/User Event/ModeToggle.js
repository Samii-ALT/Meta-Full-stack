function ModeToogle(){
    let DarkModeON = true;
    const DarkMode = <h1>Dark Mode is on</h1>
    const LightMode = <h1>Light Mode is on</h1>

    function handleClick(){
        DarkModeON = !DarkModeON
        if(DarkModeON === true){
            console.log("Dark Mode is On")
        } else {
            console.log("Light mode is on")
        }
    }

    return(
        <div>
            {DarkModeON? DarkMode : LightMode}
            <button onClick={handleClick}>
                Click me
            </button>
        </div>

    )
}

export default ModeToogle