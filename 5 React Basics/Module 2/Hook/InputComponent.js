import { useState } from "react";

function InputComponent() {
    const [inputText, setInputText] = useState("hello");

    function handleChange(event) {
        setInputText(event.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} />

            <h1>{inputText}</h1>
        </div>
    );
}

export default InputComponent