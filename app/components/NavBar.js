import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions'

class NavBar extends Component {

    render () {
        const { isLoggedIn } = this.props
        if(this.props.location.pathname == '/signin' || this.props.location.pathname == '/signup'){
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')}/></Link>
                    <div>
                        {this.props.location.pathname == '/signin'?
                            <Link to={'/signup'} className={'link'} >
                                Sign up
                            </Link>
                        :
                            <Link to={'/signin'} className={'link'}>
                                Sign in
                            </Link> 
                        }
                    </div>
                </div>
            )
        } else if(this.props.isLoggedIn) {
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')} className={'logo'}/></Link>
                    <span className={'menu'}>
                        <Link to={'/'} className={'link'}>
                            {this.props.name}
                        </Link>
                        <Link to={'/'} onClick={() => this.props.signOut()} className={'link'}>
                            Sign out
                        </Link>
                    </span>
                </div>
            )
        } else {
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')}/></Link>
                    <div>
                        <Link to={'/signup'} className={'link'} >
                            Sign up
                        </Link>
                        <Link to={'/signin'} className={'link'}>
                            Sign in
                        </Link> 
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps, {signOut})(NavBar)