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
import MyTopicView from '../components/HOC/MyTopicView'

class Router extends Component{
    componentWillMount = () => {
        if(localStorage.getItem('key')){
            this.props.checkUser()
        } 
    }

    PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            this.props.isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/signin',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )

    AuthRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            !this.props.isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/list',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )

    render() {
        const { PrivateRoute, AuthRoute } = this
        
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <AuthRoute path='/signin' component={SignIn} />
                    <AuthRoute path='/signup' component={SignUp} />
                    <Route path='/list' component={TopicList} />
                    <Route path='/detail/:id' component={Reading} />
                    <Route path='/block' component={BlogPreview} />
                    <PrivateRoute path='/createBlog' component={CreateBlogPage}/>
                    <Route path='/test' component={MyTopicView} />
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps, {checkUser})(Router)

