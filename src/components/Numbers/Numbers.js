import { useState } from "react";
import { numbers } from "../../data";
import  NumberButton  from "./NumberButton";

const Numbers = ({ setDisplay, display }) => {

    const [setNums] = useState(numbers);

    return (
        <div className="app-numbers">
            {setNums.map((num, index) => {
                return index!==9 
                ? 
                <NumberButton key={index} symbol={num} setDisplay={setDisplay} display={display}/>
                : 
                <NumberButton key={index} symbol={num} name='zero-button' setDisplay={setDisplay} display={display}/>
            })}
        </div>
    )
};

export default Numbers;

