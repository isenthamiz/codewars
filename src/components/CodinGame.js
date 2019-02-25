import React from 'react';
import axios from 'axios';

let uid;


class CodinGame extends React.Component {
    constructor(props) {
        super(props);

        super();
        this.state = { time: {}, seconds: 2400, activePage: 1, questionids: [], qtext: " ", options: {} };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageNext = this.handlePageNext.bind(this);
        this.handlePagePrevious = this.handlePagePrevious.bind(this);
        this.getQuestionDetails = this.getQuestionDetails.bind(this);
    }

    componentWillMount() {
        uid = this.props.match.params.id;

        console.log(uid);

        axios.get('http://localhost:3000/rounds/'+uid+'/quizohilic').then((doc) => {
            const qid = doc.data.question_id[0];
            this.setState(() => {
                return { questionids: doc.data.question_id }
            })

            axios.get('http://localhost:3000/questions/' + qid).then((res) => {
                const qtext = res.data.question;
                const options = res.data.options;
                this.setState(() => {
                    return {
                        qtext,
                        options
                    }
                });
                console.log(this.state);
            })

        }).catch((err) => {
            console.log(err);
        })
    }

    handlePageChange(e) {
        console.log(document.getElementById(e.target.id).innerText);
        this.setState({ activePage: e.target.id });
    }

    getQuestionDetails(number) {
        const qid = this.state.questionids[number-1];

        axios.get('http://localhost:3000/questions/' + qid).then((res) => {
            const qtext = res.data.question;
            const options = res.data.options;
            this.setState(() => {
                return {
                    qtext,
                    options
                }
            });
        })
    }

    handlePageNext(e) {
        if(this.state.activePage < 40) {
            this.setState((state) => { return { activePage: state.activePage + 1 } });
            this.getQuestionDetails(this.state.activePage);
        }
        
    }
    handlePagePrevious(e) {
        if(this.state.activePage > 1) {
            this.setState((state) => { return { activePage: state.activePage - 1 } });
            this.getQuestionDetails(this.state.activePage);
        }

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

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer()
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
            console.log('Over')
        }
    }



    render() {
       
        return (
            <div className="quizohilic">

                <div className="timmer">
                    <div className="box shadow">
                        <span>{this.state.time.m} : {this.state.time.s}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8 area">
                        <h5>Question : {this.state.activePage}</h5> 
                        <br />

                        {this.state.qtext && this.state.qtext.split("\n").map((i, key) => {
                            return <p key={key}>{i}</p>
                        })}
                    </div>
                    <div className="col-4 area">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={this.state.options.a} checked />
                            <label class="form-check-label" for="exampleRadios1">{this.state.options.a}</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={this.state.options.b} />
                            <label class="form-check-label" for="exampleRadios2">{this.state.options.b}</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value={this.state.options.c} />
                            <label class="form-check-label" for="exampleRadios3">{this.state.options.c}</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value={this.state.options.d} />
                            <label class="form-check-label" for="exampleRadios3">{this.state.options.d}</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto mr-auto">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item" onClick={this.handlePagePrevious}>
                                    <span className="page-link" aria-disabled="true">Previous</span>
                                </li>
                                <li className="page-item active" onClick={this.handlePageChange}><span id='1' className="page-link">1</span></li>
                                <li className="page-item" onClick={this.handlePageChange}><span id='2' className="page-link">2</span></li>
                                <li className="page-item" onClick={this.handlePageChange}><span id='3' className="page-link">3</span></li>
                                <li className="page-item">
                                    <span className="page-link" onClick={this.handlePageNext}>Next</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-lg btn-primary">Finish</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default CodinGame;