import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkUser } from '../actions'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/HomePage'
import SignIn from '../components/SignInPage'
import SignUp from '../components/SignUpPage'
import TopicList from '../components/TopicListPage'
import Reading from '../components/ReadingPage'
import CreateBlogPage from '../components/CreateBlogPage'
import BlogPreview from '../components/BlogPreview'

class Router extends Component{
    render() {
        if(localStorage.getItem('key')){
            this.props.checkUser()
        }

        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/list' component={TopicList} />
                    <Route path='/detail/:id' component={Reading} />
                    <Route path='/block' component={BlogPreview} />
                    <PrivateRoute path='/createBlog' component={CreateBlogPage}/>
                </div>
            </HashRouter>
        )
    }
}

const loggedIn = () => {
    let isLoggedIn = false
    localStorage.getItem('key')?isLoggedIn=true:isLoggedIn=false
    return isLoggedIn
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        loggedIn() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

export default connect(null, {checkUser})(Router)

