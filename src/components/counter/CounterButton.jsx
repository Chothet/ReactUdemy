import {useState} from 'react';
import {PropTypes} from 'prop-types';

export default function CounterButton({by, incrementMethod, decrementMethod}){

    const [count, setCount] = useState(0);

    function incrementCounter(){
        setCount(count + by);  //console.log(count);
        incrementMethod(by);
    }

    function decrementCounter(){
        setCount(count - by);
        decrementMethod(by);
    }

    return (
        <div className="Counter">
            <div>   
                <button className="decreaseButton" 
                onClick={decrementCounter} >-{by}</button>

                <button className="increaseButton" 
                onClick={incrementCounter} >+{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}