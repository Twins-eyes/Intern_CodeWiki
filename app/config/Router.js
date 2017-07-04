import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'
import CreateBlogPage from '../components/CreateBlogPage'
import BlogPreview from '../components/BlogPreview'

class Router extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/test' component={TestPage} />
                    <Route path='/block' component={BlogPreview} />
                    <Route path='/createBlog' component={CreateBlogPage} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

