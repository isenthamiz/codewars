import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <div className="callout-header no-padding content-block w3eden">
                    <div className="inner-content">
                        <div>
                            <span className="hs-cta-wrapper" >
                                <span className="hs-cta-node" data-hs-drop="true">
                                    <a className="cta_button" href="#" cta_dest_link="#">
                                        <img className="hs-cta-img" src={require('../styles/assets/ccc.jpg')} mce_noresize="1" height="329" width="100%" />
                                    </a>
                                </span>
                            </span>
                            <div className="custom-hubspot-header-copy centered">
                                <a href="#">
                                    <h1 className="cta-header"><div>CMT Coding</div><div className="cta-sub-header">Contest</div></h1>
                                    <p>Arm your teams with the tools to<br /> become Champion of <i>CODE WAR</i>.</p>
                                    <br />
                                </a>
                                <a className="cta-button-green btn" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}