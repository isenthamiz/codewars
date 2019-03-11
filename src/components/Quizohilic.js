import React, {lazy, Suspense, Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import withErrorHandler from './errorHandler/withErrorHandler';
import CompleteMessage from './quizohilic/CompleteMessage';
import QuestionTimer from './quizohilic/QuestionTimer';
import Timer from './quizohilic/Timer';
import Questions from './quizohilic/Questions';
import Options from './quizohilic/Options';
import QuizSummary from './quizohilic/QuizSummary';



// const CompleteMessage = React.lazy(() => import("./quizohilic/CompleteMessage"));
//  const QuestionTimer = React.lazy(() => import('./quizohilic/QuestionTimer'));


let uid;

class Quizohilic extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: false, seconds: 60, notification: true, isTimeOut: false, freez: false, isActive: true, isOpenModal: false, showSummary: false, showQuestion: true, showOption: true, attended: 0, activePage: 1, questionids: [], qtext: " ", options: {}, selected: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] };

        this.getLanguageClass = this.getLanguageClass.bind(this);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageNext = this.handlePageNext.bind(this);
        this.handlePagePrevious = this.handlePagePrevious.bind(this);
        this.getQuestionDetails = this.getQuestionDetails.bind(this);
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.handleOpenSummary = this.handleOpenSummary.bind(this);
        this.handleCloseSummary = this.handleCloseSummary.bind(this);
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.continueModal = this.continueModal.bind(this);

        this.handleTimeout = this.handleTimeout.bind(this);

        this.onBlur = this.onBlur.bind(this);

        this.setSeconds = this.setSeconds.bind(this);
        this.handleSetActive = this.handleSetActive.bind(this);

    }

    handleSetActive(){
        this.setState(()=>{
            return {
                isActive: true
            }
        })
    }

    componentWillMount() {
        console.log('Will Mount Stage')
        uid = this.props.match.params.id;

        axios.get('/rounds/'+uid+'/quizohilic').then((doc) => {
            const qid = doc.data[0];
            this.setState(() => {
                return { questionids: doc.data }
            })

            axios.get('/questions/' + qid).then((res) => {
                const qtext = res.data.question;
                const options = res.data.options;
                this.setState(() => {
                    return {
                        loading: true,
                        qtext,
                        options
                    }
                });
            })

        }).catch((err) => {
            console.log(err);
        })
    }

    componentDidMount() {
        console.log('Did Mount Stage')
        // console.log(this.props.match.params.lang);
        window.addEventListener("blur", this.onBlur, true);      
    }

    componentWillUnmount() {
        window.removeEventListener("blur", this.onBlur);
    }

    setSeconds(s) {
        this.setState(()=>{
            return {
                seconds: s
            }
        })
    }

    handleAnswerClick(e) {
        e.stopPropagation();
        let setSelection = this.state.selected;
        const attended = setSelection[this.state.activePage-1] === '' ? this.state.attended + 1 : this.state.attended;
        if (e.target.id === 'A') {
            setSelection[this.state.activePage-1] = 'a';
        } else if (e.target.id === 'B') {
            setSelection[this.state.activePage-1] = 'b';
        } else if (e.target.id === 'C') {
            setSelection[this.state.activePage-1] = 'c';
        } else if (e.target.id === 'D') {
            setSelection[this.state.activePage-1] = 'd';
        }

        this.setState({ attended , selected: setSelection }, () => {

            const body = {
                userid: uid,
                questionid: this.state.questionids[this.state.activePage - 1],
                option: this.state.selected[this.state.activePage-1],
                round: "quizohilic"
            }

            axios.post('/answers/', JSON.stringify(body)).then((res) => {
                console.log('Success');
            }).catch((err) => {
                console.log(err);
            })
        });


    }

    handlePageChange(e) {

            

            const qnum = parseInt(e.target.id);

            this.setState((state) => { return { showQuestion: false, showOption: false, activePage: qnum } }, () => {
        
                this.getQuestionDetails(this.state.activePage);
                this.setState(()=> {return {
                    seconds: 60,
                    showQuestion: true,
                    showOption: true
                }})
                
            });

            this.handleCloseSummary();
        
    }

    getQuestionDetails(number) {

        this.setState({loading: false});

        const qid = this.state.questionids[number - 1];

        axios.get('/questions/' + qid).then((res) => {
            const qtext = res.data.question;
            const options = res.data.options;
            this.setState(() => {
                return {
                    loading: true,
                    qtext,
                    options
                }
            });
        })
    }

    handlePageNext(e) {
        if (this.state.activePage < 40) {
            this.setState((state) => { return { showQuestion: false, showOption: false, activePage: state.activePage + 1 } }, () => {
        
                this.getQuestionDetails(this.state.activePage);
                this.setState(()=> {return {
                    seconds: 60,
                    showQuestion: true,
                    showOption: true
                }})
                
            });
        }

    }
    handlePagePrevious(e) {
        if (this.state.activePage > 1) {
            this.setState((state) => { return { showQuestion: false, showOption: false, activePage: state.activePage - 1 } }, () => {
                this.getQuestionDetails(this.state.activePage);
                this.setState(()=> {return {
                    seconds: 60,
                    showQuestion: true,
                    showOption: true
                }})
            });
        }

    }

    handleOpenSummary() {
        this.setState(() => {
            return {
                notification: true,
                showSummary: true
            }
        })
    }

    handleCloseSummary() {
        this.setState(()=> {
            return {
                showSummary: false
            }
        })
    }

    openModal() {
        this.setState(()=>{
            return {
                isOpenModal: true
            }
        })
    }

    continueModal() {
       
    }

    closeModal() {
        this.setState(()=>{
            return {
                isOpenModal: false
            }
        }, ()=>{
            this.props.history.push('/');
        })
    }

    onBlur() {
        
        if(!document.hasFocus()) {
            console.log('Out of Focus');
            this.setState(()=>{
                return {
                    isActive: false
                }
            })
        } 

    }

    handleTimeout() {
        this.setState(()=>{
            return {
                notification: true,
                isTimeOut: true,
                freez: true
            }
        })
    }

    getLanguageClass() {
        if(this.props.match.params.lang === 'java') {
            return true
        } else {
            return false
        }
    }

    render() {

        return (

            <div className="quizohilic">
                {this.state.showSummary && <QuizSummary handlePageChange={this.handlePageChange} handleCloseSummary={this.handleCloseSummary} selected={this.state.selected} open={true} />}
                {/* <Suspense fallback={<div>loading...</div>}> */}
                {this.state.isOpenModal && <CompleteMessage modal= "Completed" closeModal = {this.closeModal} id = {this.props.match.params.id} round = "quizohilic" />}
                {!this.state.isActive && <CompleteMessage modal="Voilation" closeModal = {this.closeModal} continueModal={this.continueModal} handleSetActive={this.handleSetActive} id = {this.props.match.params.id} round = "quizohilic"  />}
                {this.state.isTimeOut && <CompleteMessage modal="Timeout" closeModal = {this.closeModal} id = {this.props.match.params.id} round = "quizohilic"  />}
                {/* </Suspense> */}

                <div className="row">
                    <div className="col info">
                            <div className="row info-bar">
                                <div className="col align-self-center">
                                    <h4>Quizohilic</h4>
                                </div>
                                <div className="col align-self-center">
                                    <h3>Answered <span style={this.state.attended < 40? {color: '#ccffb3', fontWeight: 'bold'} : {color: '#ffff4d', fontWeight: 'bold'}}>{this.state.attended}</span> of <span style={{color: '#ffff4d', fontWeight: 'bold'}}>40</span></h3>
                                </div>
                                <div className="col">
                                    <Timer freez={this.state.freez} handleTimeout={this.handleTimeout} />
                                </div>
                                <div className="col align-self-end">
                                    <div className="empty">
                                    <h3><i className="fab fa-java"></i></h3>
                                    </div>
                                    <div className="empty">
                                    <h3><i className="fab fa-java"></i></h3>
                                    </div>
                                    <div id='java' className={this.props.match.params.lang === 'java' ? 'active' : undefined}>
                                    <h2><i className="fab fa-java"></i></h2>
                                    </div>
                                    <div id='python' className={this.props.match.params.lang === 'python' ? 'active' : undefined}>
                                    <h2><i className="fab fa-python"></i></h2>
                                    </div>
                                    <div id='dotnet' className={this.props.match.params.lang === 'dotnet' ? 'active' : undefined}>
                                    <h2><i className="fab fa-microsoft"></i></h2>
                                    </div>      
                                </div>
                                <div className="col">
                                    <button className="finish-btn" onClick={this.openModal}>Finish</button>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="row area shadow-sm">
                    <div className="col">
                        <div className="row">
                            
                            <div className="col">
                                {/* <Suspense fallback={<div>Loading...</div>}> */}
                                <QuestionTimer freez={this.state.freez} handlePageNext={this.handlePageNext} setSeconds={this.setSeconds} seconds={this.state.seconds} />
                                {/* </Suspense> */}
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-8 question-area">
                            <div className="row align-items-center"> 
                            <div className="col-2">
                            <a id="arrow-left" className="arrow-btn" onClick={this.handlePagePrevious}><i className={this.state.activePage > 1 && this.state.loading ? "fa fa-angle-left" : "fa fa-angle-left disabled"}></i></a>
                            </div>
                            <div className="col-8">
                        
                            {
                                this.state.showQuestion && <Questions activePage={this.state.activePage} qtext={this.state.qtext}/>
                                
                            }
                            </div>
                            <div id="arrow-right" className="col-2">
                                    <a className="arrow-btn" onClick={this.handlePageNext}><i className={this.state.activePage < 40 && this.state.loading ? "fa fa-angle-right" : "fa fa-angle-right disabled"}></i></a>
                                </div>
                            </div>
                            </div>
                            <div className="col-4 answer-area">
                            {
                               this.state.showOption &&  <Options handleAnswerClick={this.handleAnswerClick} selected={this.state.selected} activePage={this.state.activePage} options={this.state.options} />
                            }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row bottom">
                    <div className="col btm">
                        <button className="summary-btn" onClick={this.handleOpenSummary}>Summary</button>
                    </div>

                </div>

            </div>
        )
    }
}

export default withRouter(withErrorHandler(Quizohilic, axios));