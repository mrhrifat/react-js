import React from "react";
import Increment from "./Other/Increment";
import './timer.style.css';

class Timer extends React.Component {

    //State
    state = {
        count: 0
    }

    // Increment
    // incrementTimer = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }

    // Decrement
    decrementTimer = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    // Clear Interval
    interval = null

    // Clear
    clear = () => {
        clearInterval(this.interval)
        this.interval = null
    }


    // Start Timer
    startTimer = () => {
        if (this.state.count > 0 && !this.interval) {
            this.interval = setInterval(() => {
                this.setState({ count: this.state.count - 1 },
                    () => {
                        if (this.state.count === 0) {
                            alert("Time Up")
                            this.clear()
                        }
                    })
            }, 1000)
        }
    }


    // Stop Timer
    stopTimer = () => {
        if (this.interval) {
            this.clear()
        }
    }


    // Reset Timer
    resetTimer = () => {
        this.setState({ count: this.state.count = 0 })
        this.clear()
    }



    render() {
        return (
            <div className="d-flex flex-column w-50 py-5 align-items-center m-auto area">
                <div className="top">
                    <button className="btn btn-primary" onClick={this.decrementTimer}>
                        -
                    </button>
                    <span className="display">{this.state.count}</span>
                    <button className="btn btn-primary"  >
                        +
                    </button>
                </div>

                <div className="bottom">
                    <button className="btn btn-success" onClick={this.startTimer}>
                        Start
                    </button>
                    <button className="btn btn-warning" onClick={this.stopTimer}>
                        Stop
                    </button>
                    <button className="btn btn-danger" onClick={this.resetTimer}>
                        Reset
                    </button>
                </div>
            </div >
        )
    }

}
export default Timer