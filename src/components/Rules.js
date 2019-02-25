import React from 'react';
import {withRouter} from 'react-router-dom';

class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToQuizohilic = this.navigateToQuizohilic.bind(this);
    }

    navigateToQuizohilic() {
        this.props.history.push('/'+this.props.match.params.id+'/quizohilic/'+this.props.match.params.lang);
    }

    render() {
        return (
            <div className="rules">
                <div className="row">
                    <div className="col header__left">
                        <h4>Total Questions - 40</h4>
                    </div>
                    <div className="col">
                        <img id='qna' src='http://localhost:3001/assets/questions_and_answers.png' />
                    </div>
                    <div className="col header__right">
                        <h4>Max Time ~ 40 Min</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item  list-group-item-warning">1. All the challenges will have a pre-determined score.</li>
                            <li className="list-group-item list-group-item-warning">2. Please refrain from discussing strategy during the contest.</li>
                            <li className="list-group-item list-group-item-warning">3. Answer 40 questions in 40 minutes.</li>
                            <li className="list-group-item list-group-item-warning">4. Contestents are not allowed to change/minimize the tab.</li>
                            <li className="list-group-item list-group-item-warning">5. Any malpractice will result in disqualification.</li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-md-center btn-area">
                    <button id='start' onClick={this.navigateToQuizohilic}>Start</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Rules);