import React, {Component} from 'react';

class ButtonsPanel extends Component {

    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }

    render() {
        return (
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Zwieksz o 1</button>
                <button onClick={() => {
                    this.resetOrReinitCounter(false) //decides if we set to 0 or reset (false for reset)
                }
                }>Reset</button>
            </div>
        )
    }
}

export default ButtonsPanel;