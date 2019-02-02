import React from 'react';

export default class ContestDetails extends React.Component {
    render() {
        return (
            <div className="contest-details">
            <div className="container">
                <div className="inner-content">
                    <div className="row info-holder">
                        <div className="info">
                            <div className="number">30<sup>%</sup></div>
                            <div className="holder">of participants will be<br /> shortlisted for <strong>Solve the Puzzle</strong></div>
                        </div>
                        <div className="info">
                            <div className="number">10<sup>%</sup></div>
                            <div className="holder">of round 2 contestants<br /> will be selected for<strong><br /> Grand Finale</strong></div>
                        </div>
                        <div className="info">
                            <div className="number">1</div>
                            <div className="holder">contestant will conquer the <strong><br /> THRONE</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}