import { useState } from 'react';
import { specials } from "../../data";
import SpecialButton from './SpecialButton';

const Specials = ( { setDisplay, display }) => {

    const [setSpecials] = useState(specials)

    return (
        <div className='app-specials' >
            {setSpecials.map((special, index) => {
                return <SpecialButton key={index} symbol={special} setDisplay={setDisplay} display={display} />
            })}
        </div>
    )
};

export default Specials;