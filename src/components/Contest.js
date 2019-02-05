import React from 'react';
import {connect} from 'react-redux';
import ContestDetails from './ContestDetails';

class Contest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className=" content-block w3eden" style={{ backgroundColor: '#ececec' }}>
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="boxes">
                                    <div className={this.props.quizohilic === 'ACTIVATE' ? "box roundone" : "box roundone box-disabled"}>
                                        <a href="">
                                            <h2 id="round-one-h">Test Your Knowledge</h2>
                                            <p id="round-one-p">Create story-driven visual narratives that motivate your audience to act</p>
                                            <span className="more">
                                                <span className="link-box">Contest Now</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className={this.props.codingame === 'ACTIVATE' ? "box roundtwo" : "box roundtwo box-disabled"}>
                                        <a href="">
                                            <h2 id="round-two-h">Solve  <br />Puzzle</h2><p id="round-two-p">Transform text-heavy slides into easy-to-interpret visuals</p>
                                            <span className="more"><span className="link-box">Contest Now</span></span>
                                        </a>
                                    </div>
                                    <div className={this.props.cfc === 'ACTIVATE' ? "box roundthree" : "box roundthree box-disabled"}>
                                        <a href="">
                                            <h2 id="round-three-h">Crack the<br />Code</h2><p id="round-three-p">Convert data into valuable insights that accelerate decision-making</p>
                                            <span className="more"><span className="link-box">Contest Now</span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContestDetails />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quizohilic: state.quizohilic,
        codingame: state.codingame,
        cfc: state.cfc
    }
}

export default connect(mapStateToProps)(Contest);