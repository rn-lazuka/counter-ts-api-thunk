import React from 'react';
interface IProps {
    currentValue:number
}
function Counter(props:IProps) {
    return (
        <div>
            <h1>Counter</h1>
            <h2>{props.currentValue}</h2>
        </div>
    );
}

export default Counter;