import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        if(this.props.location.pathname == '/'){
            return (
                <div style={styles.navBar}>
                    <img src={require('../img/codewikiwhite.gif')} style={styles.logo} />
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
                        {this.props.name}
                    </Link>
                    <Link to={'/a'}>
                        Sign out
                    </Link>
                </div>
            )
        }
    }
}

const styles = {
    navBar:{
        height: 75,
        padding: 20,
        backgroundColor: 'transparent',
        fontFamily: 'Arial'
    },
    logo:{
        align: 'left',
        paddingRight: '860px',
        width: '200px',
        height: '50px'
    }
}

export default NavBar