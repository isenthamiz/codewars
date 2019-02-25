import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CodinGame from '../components/CodinGame';
import Dashboard from '../components/Dashboard';
import Quizohilic from '../components/Quizohilic';
import Rules from '../components/Rules';
import UnAuthorized from '../components/UnAuthorized';


export default class AppRouter extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' component={Dashboard} exact={true} />
                            <Route path='/:id/quizohilic/:lang/rules/' component={Rules} exact={true} />
                            <Route path='/:id/quizohilic/:lang' component={Quizohilic} /> 
                            {/* <Route path='/quizohilic' component={Quizohilic} />  */}
                            <Route path='/:id/codingame/:lang' component={CodinGame} />
                            <Route component={UnAuthorized} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
        )
    }
}