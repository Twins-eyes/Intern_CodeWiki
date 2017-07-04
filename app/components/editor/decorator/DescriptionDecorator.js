import React from 'react'

const Description = (props) => {
    return (
        <code className={'description'} >
            {props.children}
        </code>
    )
}

const findEntities = entity => {
    return (contentBlock, callback, contentState) => {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity() 
                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType() === entity
                ) 
            },
            callback
        ) 
    }
}

const SubDescription = (props, changeDesFunction) => {
    const { subDescription } = props.contentState.getEntity(props.entityKey).getData()

    return (
        <span className={'sub-description'} onMouseOver={() => changeDesFunction(subDescription)} onMouseOut={() => changeDesFunction('')} style={{backgroundColor: '#ddd', borderRadius: 1.75, padding: 2}}>
            {props.children}
        </span>
    )
}

module.exports = {
    Description,
    SubDescription,
    findEntities
}


