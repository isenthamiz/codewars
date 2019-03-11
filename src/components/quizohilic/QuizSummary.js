import React from 'react';
import Fade from '@material-ui/core/Fade';


export default class QuizSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

        this.getOptions = this.getOptions.bind(this);
    }

    componentDidMount() {
        this.setState(() => {
            return {
                show: true
            }
        })
    }

    componentWillUnmount() {
        this.setState(() => {
            return {
                show: false
            }
        })
    }

    getOptions() {
        let i=0;
        const options = this.props.selected.map(element => {
            return <button id={++i} key={i} className= {element === '' ? "option-btn deactive" : "option-btn"} onClick={this.props.handlePageChange}>{i<10 ? `0${i}` : i}</button>
        })

        return (
            <div className="option-row">
                {options}
            </div>
        )
    }


    render() {

        return (
            <div>
                <Fade in={this.state.show}>
                    <div className="summary" style={{
                        transform: this.props.open ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.open ? '1' : '0'
                    }}>
                        <div className="summary-head">
                            <h4>Quiz Summary</h4>
                            <h4 id="close-btn"><i className="fa fa-times" onClick={this.props.handleCloseSummary}></i></h4>
                        </div>
                        <div className="summary-body">
                            {this.getOptions()}
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}

