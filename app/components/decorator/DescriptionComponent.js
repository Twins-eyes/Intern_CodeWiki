import React from 'react'

const TopDescription = (props) => {
    return (
        <div style={styles.top_des}>
            {props.children}
        </div>
    )
}

const BottomDescription = (props) => {
    return (
        <div style={styles.bottom_des}>
            {props.children}
        </div>
    )
}

const MiddleDescription = (props) => {
    return (
        <div style={styles.middle_des}>
            {props.children}
        </div>
    )
}

const styles = {
    top_des: {
        backgroundColor: '#ddd', 
        paddingTop: 16, 
        paddingLeft: 16, 
        borderRadius: '3px 3px 0px 0px'
    },
    bottom_des: {
        backgroundColor: '#ddd', 
        paddingBottom: 16, 
        paddingLeft: 16, 
        borderRadius: '0px 0px 3px 3px'
    },
    middle_des: {
        backgroundColor: '#ddd', 
        paddingLeft: 16, 
    }
}

export {
    TopDescription,
    BottomDescription,
    MiddleDescription
}