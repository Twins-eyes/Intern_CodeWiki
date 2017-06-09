import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'
import BlockEditor from '../components/BlockEditor'
import SignIn from '../components/SignInPage'

class Router extends Component{
    render() {
        console.log(this.props)
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/a' component={TestPage} />
                    <Route path='/block' component={BlockEditor} />
                    <Route path='/signin' component={SignIn} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

