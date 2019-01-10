import React, { Component } from 'react';
import './Counter.css';
import ButtonsPanel from './ButtonsPanel.js';
import NumericInput from 'react-numeric-input';

class Counter extends Component {
    constructor(props) {
        super(props);
        let initValue = 0;
        if (! isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }
        this.state = {
            counterValue: initValue,
        }
    }
    changeValue = () => {
        let newvalue=0;
        this.setState((prevValue) => {
            return ({
                counterValue: prevValue.counterValue + this.props.value
            });
        });
    }

    resetCounter = (resetCounter) => {
        let initValue=0;

        this.setState({
            counterValue: initValue,
        });
      }

      reinitCounter = (reinitCounter) => {
        let initValue=0;

        if(!reinitCounter){
            if (! isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue);
            }
        }
        this.setState({
            counterValue: initValue,
        });
      }

    render() {
        return (
            <div className='counter'>Licznik:
        <span className='value'>
                    {this.state.counterValue}
                </span>
                <ButtonsPanel reinitCounterValue={this.reinitCounter} resetCounterValue={this.resetCounter} changeCounterValue={this.changeValue} />
                <NumericInput min={0} max={100} value={1}/>
            </div>
        );
    }
}
export default Counter;