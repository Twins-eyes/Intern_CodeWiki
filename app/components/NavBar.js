import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    onMouseOver(){
        const newStyle = {...styles.link, color:'grey'}
    }

    render () {
        if(this.props.location.pathname == '/'){
            return (
                <div style={styles.navBar}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')} style={styles.logo} /></Link>
                    <span style={styles.menu}>
                        <Link to={'/signup'} style={styles.link}>
                            Sign up
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/signin'} style={styles.link}>
                            Sign in
                        </Link> 
                    </span>
                </div>
            )
        } else {
            return (
                <div style={styles.navBar}>
                    <Link to={'/'} style={styles.link}>
                        {this.props.name}
                    </Link>
                    <Link to={'/a'} style={styles.link}>
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
        paddingBottom: 0,
        backgroundColor: 'transparent',
        fontFamily: 'Arial',
        flexDirection: 'column'
    },
    logo:{
        align: 'left',
        width: '120px',
        height: '25px',
    },
    menu:{
        backgroundColor:'transparent',
        float: 'right'
    },
    link:{
        color: 'white',
        textDecoration: 'none'
    }
}

export default NavBar