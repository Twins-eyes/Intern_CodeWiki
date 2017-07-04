import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        if(this.props.location.pathname == '/' || 
            this.props.location.pathname == '/signin' ||
            this.props.location.pathname == '/signup'
        ){
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')}/></Link>
                    <Link to={'/signup'} className={'link'} >
                        Sign up
                    </Link>
                    <Link to={'/signin'} className={'link'}>
                        Sign in
                    </Link> 
                </div>
            )
        } else {
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')} className={'logo'}/></Link>
                    <span className={'menu'}>
                        <Link to={'/'} className={'link'}>
                            {this.props.name}
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/a'} className={'link'}>
                            Sign out
                        </Link>
                    </span>
                </div>
            )
        }
    }
}

export default NavBar