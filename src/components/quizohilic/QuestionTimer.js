import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default class QuestionTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds_question: 60
        }
        this.timer_question = 0;
        this.countDown_question = this.countDown_question.bind(this);
    }

    componentDidMount() {

        this.startTimerInterval();
    }


    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    startTimerInterval() {
        if (this.timer_question == 0 && this.props.seconds >= 0) {
            this.timer_question = setInterval(this.countDown_question, 1000);
        }
    }

    countDown_question() {
        // Remove one second, set state so a re-render happens.
      
        if (!this.props.freez) {
            let seconds1 = this.props.seconds - 1;
            this.props.setSeconds(this.secondsToTime(seconds1).s);

            // Check if we're at zero.
            if (seconds1 == 0) {
                clearInterval(this.timer_question);
                this.timer_question = 0;
                this.props.setSeconds(60);
                this.startTimerInterval();
                this.props.handlePageNext();
                // console.log(this.timer_question, this.state.seconds_question);

                // console.log('Over')
            }

        }

    }

    render() {
        return (
            <div>
                <Progress
                    percent={this.props.seconds * 1.66}
                    status={this.props.seconds > 30 ? 'green' : this.props.seconds > 10 ? 'yellow' : 'red'}
                    theme={{
                        red: {
                            symbol: this.props.seconds,
                            trailColor: 'lightgray',
                            color: '#e2525c'
                        },
                        yellow: {
                            symbol: this.props.seconds,
                            trailColor: 'lightgray',
                            color: '#df7f27'
                        },
                        green: {
                            symbol: this.props.seconds,
                            trailColor: 'lightgray',
                            color: '#9DC129'
                        }
                    }}
                />
            </div>
        )
    }
}