import React from 'react';
import Grow from '@material-ui/core/Grow';

export default class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grow: true
        }
    }

    componentDidMount(){
        this.setState(()=> {
            return {
                grow: true
            }
        })
    }

    componentWillUnmount() {
        this.setState(()=> {
            return {
                grow: false
            }
        })
    }


    render(){
        return (
            <div>
                <Grow in={this.state.grow}
                             style={{ transformOrigin: '0 0 0' }}
                             {...(true ? { timeout: 1000 } : {})}
                            >
                <div>
                <div className="question-head">
                                    <h4>Options</h4>
                                </div>
                                <div className="list-group">
                                 {this.props.options.a &&
                                    <a id='A' onClick={this.props.handleAnswerClick} className={this.props.selected[this.props.activePage-1] === 'a' ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                                        <div className="d-flex w-100 justify-content-between" style={{ pointerEvents: 'none' }}>
                                            <p className="mb-1" style={{ pointerEvents: 'none' }}>{this.props.options.a}</p>
                                            <small style={{ pointerEvents: 'none' }}>A</small>
                                        </div>

                                 </a> }
                                 {this.props.options.b && 
                                    <a id='B' onClick={this.props.handleAnswerClick} className={this.props.selected[this.props.activePage-1] === 'b' ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                                        <div className="d-flex w-100 justify-content-between" style={{ pointerEvents: 'none' }}>
                                            <p className="mb-1" style={{ pointerEvents: 'none' }}>{this.props.options.b}</p>
                                            <small style={{ pointerEvents: 'none' }}>B</small>
                                        </div>

                                 </a> }
                                 {this.props.options.c && 
                                    <a id='C' onClick={this.props.handleAnswerClick} className={this.props.selected[this.props.activePage-1] === 'c' ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                                        <div className="d-flex w-100 justify-content-between" style={{ pointerEvents: 'none' }}>
                                            <p className="mb-1" style={{ pointerEvents: 'none' }}>{this.props.options.c}</p>
                                            <small style={{ pointerEvents: 'none' }}>C</small>
                                        </div>

                                    </a>}
                                {this.props.options.d &&
                                    <a id='D' onClick={this.props.handleAnswerClick} className={this.props.selected[this.props.activePage-1] === 'd' ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                                        <div className="d-flex w-100 justify-content-between" style={{ pointerEvents: 'none' }}>
                                            <p className="mb-1" style={{ pointerEvents: 'none' }}>{this.props.options.d}</p>
                                            <small style={{ pointerEvents: 'none' }}>D</small>
                                        </div>
                                    </a>}
                                </div>
                    </div>
                    </Grow>
            </div>
        )
    }
}