import React from 'react';
import ContestDetails from './ContestDetails';

export default class Contest extends React.Component {
    render() {
        return (
            <div>
            <div className=" content-block w3eden" style={{ backgroundColor: '#ececec' }}>
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="boxes">
                                    <div className="box roundone">
                                        <a href="">
                                            <h2>Test Your Knowledge</h2>
                                            <p>Create story-driven visual narratives that motivate your audience to act</p>
                                            <span className="more">
                                                <span className="link-box">Contest Now</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="box roundtwo">
                                        <a href="">
                                            <h2>Solve  <br />Puzzle</h2><p>Transform text-heavy slides into easy-to-interpret visuals</p>
                                            <span className="more"><span className="link-box">Contest Now</span></span>
                                        </a>
                                    </div>
                                    <div className="box roundthree">
                                        <a href="">
                                            <h2>Crack the<br />Code</h2><p>Convert data into valuable insights that accelerate decision-making</p>
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