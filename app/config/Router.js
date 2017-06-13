import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'
import BlockEditor from '../components/BlockEditor'
import SignIn from '../components/SignInPage'
import SignUp from '../components/SignUpPage'
import TopicList from '../components/TopicList'

class Router extends Component{
    render() {
        console.log(this.props)
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/test' component={TestPage} />
                    <Route path='/block' component={BlockEditor} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/list' component={TopicList} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

