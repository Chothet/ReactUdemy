import {useState} from 'react';

import './Counter.css';
import CounterButton from './CounterButton';

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementFunction(by){
        setCount(count + by);
    }
    function decrementFunction(by){
        setCount(count - by);
    }
    function resetCounter(){
        setCount(0);
    }
   
    return (
        <>
            <div className="totalCount">{count}</div>
            <CounterButton incrementMethod= {incrementFunction} decrementMethod= {decrementFunction}/>
            <CounterButton by={2} incrementMethod = {incrementFunction} decrementMethod = {decrementFunction}/>
            <CounterButton  by={3} incrementMethod = {incrementFunction} decrementMethod = {decrementFunction}/>
            <CounterButton by={4} incrementMethod = {incrementFunction} decrementMethod = {decrementFunction}/>

            <button className="reset" 
                onClick={resetCounter} >Reset</button>
        </>
    )
};
