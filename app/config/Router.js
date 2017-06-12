import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'
import BlockEditor from '../components/BlockEditor'

class Router extends Component{
    render() {
        console.log(this.props)
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/test' component={TestPage} />
                    <Route path='/block' component={BlockEditor} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

