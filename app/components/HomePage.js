import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'
import { Row, Col } from 'antd'
import Parallax from 'parallax-js'

class HomePage extends Component {
    render () {
        return (
            <div>
                <NavBar location={this.props.location}/>
                <Row className={'page'}>
                    <Col xs={12} md={12}>
                        <div className={'syno'}>
                            <h1>CodeWiki</h1><br/>
                            <span>The new way to express your
                                code and explanation with other people
                                in the different ways from the traditional site.<br/><br/>
                            </span>
                            <p><span>CodeWiki</span> allow you to correspond between code
                                and explanation within one screen, helping developers
                                to easily write the explanation when sharing with other people.<br/> 
                                <br/>
                                <span>CodeWiki</span> not only provides the open space 
                                to share your codes but also finds others' code to get more 
                                understanding in coding ways.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={12}><SignInBox/></Col>
                </Row>
            </div>
        )
    }
}

export default HomePage