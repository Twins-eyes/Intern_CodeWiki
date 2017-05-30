import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        if(this.props.location.pathname == '/'){
            return (
                <div style={{backgroundColor:'#88BBD6', height: 100}}>
                    <Link to={'/test'}>
                        Category
                    </Link>
                    <Link to={'/'}>
                        Sign up
                    </Link>
                    <Link to={'/a'}>
                        Sign in
                    </Link>
                </div>
            )
        } else {
            return (
                <div style={{backgroundColor:'#88BBD6', height: 100}}>
                    <Link to={'/'}>
                        Home
                    </Link>
                    <Link to={'/a'}>
                        a
                    </Link>
                </div>
            )
        }
    }
}

export default NavBar