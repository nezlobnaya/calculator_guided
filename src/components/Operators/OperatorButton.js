
const OperatorButton = ({ value, symbol, setDisplay, display }) => {

    function handleOperator() {
       if (symbol === '+' || '-' || '/' || 'x') return setDisplay(display + value);
    };

    function handleCalculation () {
        // eslint-disable-next-line
        if (value==='=') return setDisplay(eval(display));
    }
    return (
        <div className="operator-button" value={value} onClick={() => handleOperator() || handleCalculation()}>
            {symbol}
        </div>
    );

};

export default OperatorButton;