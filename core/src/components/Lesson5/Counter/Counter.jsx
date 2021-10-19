import React from "react";
import './counter.style.css';

class Counter extends React.Component {
    state = {
        count: 0
    }

    // // Long Increment
    // incrementTimer = () => {
    //     this.setState(previous => {
    //         return {
    //             count: previous.count + 1
    //         }
    //     })
    // }

    // Short Increment
    incrementTimer = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // Decrement
    decrementTimer = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    // Clear Interval
    interval = null
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
                            alert('Time Up')
                            // clearInterval(this.interval)
                            // this.interval = null
                            this.clear()
                        }
                    })
            }, 1000)
        }
    }

    // Stop Timer
    stopTimer = () => {
        if (this.state.count > 0 && this.interval) {
            clearInterval(this.clear())
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
                    <button className="btn btn-primary" onClick={this.incrementTimer}>
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
            </div>
        )
    }


    // Interval Function Example

    // myFunction() {
    //     var date = new Date();
    //     var show = document.getElementById('time')
    //     console.log(date)
    //     show.innerHTML = date.toLocaleTimeString()
    // }
    // go = setInterval(myFunction, 1000)
    // myStopFunction() {
    //     clearInterval(go)
    // }
}
export default Counter