import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions'
import '../assets/editor.scss'

class NavBar extends Component {

    authButton = () => {
        if(this.props.location.pathname == '/signin' || this.props.location.pathname == '/signup'){
            return (
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
            )
        } else if(this.props.isLoggedIn) {
            return (
                <span className={'menu'}>
                    <Link to={'/'} className={'link'}>
                        {this.props.name}
                    </Link>
                    <Link to={'/'} onClick={() => this.props.signOut()} className={'link'}>
                        Sign out
                    </Link>
                </span>
            )
        } else {
            return (
                <div>
                    <Link to={'/signup'} className={'link'} >
                        Sign up
                    </Link>
                    <Link to={'/signin'} className={'link'}>
                        Sign in
                    </Link> 
                </div>
            )
        }
    }

    render () {
        const { isLoggedIn } = this.props

        return (
            <div className={'navBar'}>
                <span>
                    <Link style={{ paddingLeft: 70 }} to={'/'}>
                        <img src={require('../img/codewikiwhite.gif')} className={'logo'}/>
                    </Link>
                    <input
                        type={'text'} 
                        style={{borderRadius: 3, border: '0', marginLeft: 20, marginTop: 1, paddingLeft: 5, fontSize: 12, height: 29, width: 200, backgroundColor: '#F2991D'}} 
                        placeholder={'Search by tag or title'} 
                        className={'nav-input'}
                    />
                    <Link style={{ paddingLeft: 20 }} to={'/list'}>
                        List
                    </Link>
                    <Link style={{ paddingLeft: 20 }} to={'/createBlog'}>
                        Create
                    </Link>
                </span>
                {this.authButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps, {signOut})(NavBar)