import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import Quizohilic from '../components/Quizohilic';

export default class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' component={Dashboard} exact={true} />
                            <Route path='/quizohilic' component={Quizohilic} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}