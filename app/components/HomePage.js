import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'

class HomePage extends Component {
    render () {
        return (
            <div className={'page'}>
                <NavBar location={this.props.location}/>
                <div>
                    <h1>CodeWiki</h1>
                    <p>The new way to express your share<br/> 
                    code and explanation with other people<br/> 
                    in the different ways from the traditional wiki.</p>
                    <p>CodeWiki allow you to correspond between code<br/> 
                    and explanation within one screen to help developer<br/> 
                    to easily write the explanation to share with other people.<br/> 
                    <br/>
                    CodeWiki provides the open space to share your code<br/>
                    and also finds others code to get more understand<br/>
                    in coding ways.
                    </p>
                </div>
                <SignInBox />
            </div>
        )
    }
}

export default HomePage