import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        if(this.props.location.pathname == '/'){
            return (
                <div style={styles.navBar}>
                    <img src='codewikiblack.pdf'/>
                    <Link to={'/signup'}>
                        Sign up
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={'/signin'}>
                        Sign in
                    </Link>
                </div>
            )
        } else {
            return (
                <div style={styles.navBar}>
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

const styles = {
    navBar:{
        textAlign: 'right', 
        height: 75,
        padding: 20,
        backgroundColor: 'transparent',
        fontFamily: 'Arial'
    }
}

export default NavBar