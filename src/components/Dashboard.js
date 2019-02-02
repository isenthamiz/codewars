import React from 'react';
import Banner from './Banner';
import Contest from './Contest';
import Sliders from './Sliders';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Contest />
                <Sliders />
            </div>
        )
    }
}