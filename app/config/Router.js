import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'
import BlockEditor from '../components/BlockEditor'
import SignIn from '../components/SignInPage'
import SignUp from '../components/SignUpPage'

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
                    <Route path='/signup' component={SignUp} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

