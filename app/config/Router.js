import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'

class Router extends Component{
    render() {
        console.log(this.props)
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/a' component={TestPage} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

