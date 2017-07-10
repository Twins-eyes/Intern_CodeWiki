import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
//import TestPage from '../components/TestPage'
import HomePage from '../components/HomePage'
<<<<<<< HEAD
import BlockEditor from '../components/BlockEditor'
import SignIn from '../components/SignInPage'
import SignUp from '../components/SignUpPage'
import TopicList from '../components/TopicListPage'
import Test from '../components/Test'
import Reading from '../components/ReadingPage'
=======
import CreateBlogPage from '../components/CreateBlogPage'
import BlogPreview from '../components/BlogPreview'
>>>>>>> 769fdfdd65b03c9759880cbf958bb70abe7ee693

class Router extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
<<<<<<< HEAD
                    {/*<Route path='/test' component={TestPage} />*/}
                    <Route path='/block' component={BlockEditor} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/list' component={TopicList} />
                    <Route path='/test' component={Test} />
                    <Route path='/detail' component={Reading} />
=======
                    <Route path='/test' component={TestPage} />
                    <Route path='/block' component={BlogPreview} />
                    <Route path='/createBlog' component={CreateBlogPage} />
>>>>>>> 769fdfdd65b03c9759880cbf958bb70abe7ee693
                </div>
            </HashRouter>
        )
    }
}

export default Router

