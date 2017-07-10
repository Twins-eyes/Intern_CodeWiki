import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import BlockEditor from '../components/BlockEditor'
import SignIn from '../components/SignInPage'
import SignUp from '../components/SignUpPage'
import TopicList from '../components/TopicListPage'
import Reading from '../components/ReadingPage'
import CreateBlogPage from '../components/CreateBlogPage'
import BlogPreview from '../components/BlogPreview'

class Router extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/block' component={BlockEditor} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/list' component={TopicList} />
                    <Route path='/detail' component={Reading} />
                    <Route path='/block' component={BlogPreview} />
                    <Route path='/createBlog' component={CreateBlogPage} />
                </div>
            </HashRouter>
        )
    }
}

export default Router

