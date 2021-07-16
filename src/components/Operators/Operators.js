import { useState } from "react";
import { operators } from "../../data";
import  OperatorButton from "./OperatorButton";

const Operators =({ display, setDisplay }) => {

    const [setOperators] = useState(operators);

    return (
        <div className="app-operators">
            {setOperators.map((operator, index) => {
                return (
                    <OperatorButton
                        key={index}
                        symbol={operator.char}
                        value={operator.value}
                        display={display}
                        setDisplay={setDisplay}
                    />
                );
            })}
        </div>
    )
};

export default Operators;
