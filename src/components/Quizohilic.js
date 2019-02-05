import React from 'react';
const ms = require('pretty-ms')

const qestionJson = {
    "question": "import java.io.*; \n public static void main() \n { \n system.out.println(\"ok\"); \n } ",
    "option1": "abc",
    "option2": "def",
    "option3": "ghi",
    "option4": "jkl"
}


class Quizohilic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            isOn: false,
            start: 0
        }

        this.startTimer = this.startTimer.bind(this);
    }

    componentDidMount() {
        this.startTimer()
    }

    startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
    }

    render() {
        return (
            <div className="quizohilic">
                <div>
                    <div className="timmer">
                    <h3>timer: {ms(this.state.time)}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 area">
                        
                           {qestionJson.question.split("\n").map((i,key) => {
                               return <p key={key}>{i}</p>
                           })}
                    </div>
                    <div className="col-4 area">

                    </div>
                </div>
            </div>
        )
    }
}

export default Quizohilic;