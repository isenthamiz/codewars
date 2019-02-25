import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import ContestDetails from './ContestDetails';


class Contest extends React.Component {
    constructor(props) {
        super(props);
        this.navigateContest = this.navigateContest.bind(this);
    }

    navigateContest(e) {
        console.log(e.target.id);
        const quizohilic_uri = '/' + this.props.userId + '/quizohilic/' + this.props.language + '/rules';
        const codingame_uri = '/' + this.props.userId + '/codingame/' + this.props.language + '/rules';
        const cfc_uri = '/' + this.props.userId + '/cfc/' + this.props.language + '/rules';
        if(e.target.id === 'quizohilic') {
            this.props.history.push(quizohilic_uri);
        } else if(e.target.id === 'codingame') {
            this.props.history.push(codingame_uri);
        } else if(e.target.id === 'cfc') {
            this.props.history.push(cfc_uri);
        }
    }

    render() {
        return (
            <div>
                <div className=" content-block w3eden" style={{ backgroundColor: '#ececec' }}>
                    <div className="container">
                        <div className="inner-content">
                        <div className="box-group"> 
                            <div className={(this.props.quizohilic === 'ACTIVATE') || (this.props.quizohilic === 'COMPLETED') ? "box" : "box box-disabled"}>
                                <div className="box-head">
                                    <h4>Quizohilic</h4>
                                    <h4 className={this.props.quizohilic === 'COMPLETED' ? "enable" : "disable"}><i className="fas fa-check-circle"></i></h4>
                                </div>
                                <div className="box-content">
                                     <img className='box-icon' src='/assets/mcq.png' />
                                     <p id="round-one-p">Count on the corrects and correct the rest to face the next.</p>
                                    <button id='quizohilic' className="contest-btn" disabled={this.props.quizohilic === 'COMPLETED'} onClick={this.navigateContest}>Contest Now</button>
                                </div>
                            </div>
                            <div className={((this.props.codingame === 'ACTIVATE') || (this.props.codingame === 'COMPLETED')) ? "box" : "box box-disabled"}>
                            <div className="box-head">
                                <h4>CodinGame</h4>
                                <h4 className={this.props.codingame === 'COMPLETED' ? "enable" : "disable"}><i className="fas fa-check-circle"></i></h4>
                                </div>
                                <div className="box-content">
                                <img className='box-icon' src='/assets/codingame.png' />
                                <p id="round-two-p">Chisel your skills to complete the unfinished slices of code.</p>
                                <button id='codingame' className="contest-btn" disabled={this.props.codingame === 'COMPLETED'} onClick={this.navigateContest}>Contest Now</button>
                                </div>
                            </div>
                            <div className={(this.props.cfc === 'ACTIVATE') || (this.props.cfc === 'COMPLETED') ? "box" : "box box-disabled"}>
                            <div className="box-head">
                                <h4>Crack For Code</h4>
                                <h4 className={this.props.cfc === 'COMPLETED' ? "enable" : "disable"}><i className="fas fa-check-circle"></i></h4>
                                </div>
                                <div className="box-content">
                                <img className='box-icon' src='/assets/cfc.png' />
                                <p id="round-three-p">A chance to showcase your intellect.</p>
                                <br/>
                                <button id='cfc' className="contest-btn" disabled={this.props.cfc === 'COMPLETED'} onClick={this.navigateContest}>Contest Now</button>
                                </div>
                            </div>
                        </div>
                            {/* <div className="row">
                                <div className="boxes">
                                    <div className={this.props.quizohilic === 'ACTIVATE' ? "box roundone" : "box roundone box-disabled"}>
                                        <a href="">
                                            <h2 id="round-one-h">Test Your Knowledge</h2>
                                            <p id="round-one-p">Count on the corrects and correct the rest to face the next.</p>
                                            <span className="more">
                                                <Link className="link-box" to={'/' + this.props.userId + '/quizohilic/' + this.props.language + '/rules'}>Contest Now</Link>
                                            </span>
                                        </a>
                                    </div>
                                    <div className={this.props.codingame === 'ACTIVATE' ? "box roundtwo" : "box roundtwo box-disabled"}>
                                        <a href="">
                                            <h2 id="round-two-h">Solve  <br />Puzzle</h2><p id="round-two-p">Go back to the childhood to play with basics.</p>
                                            <span className="more">
                                                <Link className="link-box" to={'/' + this.props.userId + '/codingame'}>Contest Now</Link>
                                            </span>
                                        </a>
                                    </div>
                                    <div className={this.props.cfc === 'ACTIVATE' ? "box roundthree" : "box roundthree box-disabled"}>
                                        <a href="">
                                            <h2 id="round-three-h">Crack For<br />Code</h2><p id="round-three-p">Hey! Intel inside, Intellegence outside, It Compiles! Ship it! </p>
                                            <span className="more"><span className="link-box">Contest Now</span></span>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
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
        userId: state.userId,
        quizohilic: state.quizohilic,
        codingame: state.codingame,
        cfc: state.cfc,
        language: state.language
    }
}

export default withRouter(connect(mapStateToProps)(Contest));