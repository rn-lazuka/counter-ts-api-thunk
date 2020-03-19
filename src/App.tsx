import React from 'react';
import './App.css';
import Counter from "./ui/Counter";
import {connect} from "react-redux";
import {AppStateType} from "./bll/store";
import {changeValue, setCount} from "./bll/reducer";
import {ICurrentValue} from "./entities/entities";


interface IMSTP {
    currentValue: number
}

interface IMDTP {
    setCount: () => void
    changeValue: (newValue:ICurrentValue)=>void
}

class App extends React.Component<IMSTP & IMDTP> {

    componentDidMount(): void {
        this.props.setCount()
    };
    incValue = ():void =>{
        let newValue = {currentValue:this.props.currentValue+1};
        this.props.changeValue(newValue)
    };
    decValue = ():void =>{
        let newValue = {currentValue:this.props.currentValue-1};
        this.props.changeValue(newValue)
    };

    render() {
        return (
            <div className="App">
                <Counter currentValue={this.props.currentValue}/>
                <button onClick={this.incValue}>Increment</button>
                <button onClick={this.decValue}>Dec</button>
            </div>
        );
    }
}

const mstp = (state: AppStateType):IMSTP => {
    return {
        currentValue: state.counter.currentValue
    }
};
export default connect<IMSTP,IMDTP,{},AppStateType>(mstp, {setCount,changeValue})(App);
