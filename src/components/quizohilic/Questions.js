import React from 'react';
import Grow from '@material-ui/core/Grow';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grow: true
        }
    }

    componentDidMount() {
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


    render() {
        return (
            <div>      
                <Grow in={this.state.grow}>
                            <div className="question shadow">
                                <div className="question-head">

                                    <h4>Question : {this.props.activePage}</h4>
                                </div>
                                <div className="question-body">
                                    {this.props.qtext && this.props.qtext.split("\n").map((i, key) => {
                                        return <p key={key}>{i}</p>
                                    })}
                                </div>
                                </div>
                </Grow>
                                
            </div>
        )
    }
}