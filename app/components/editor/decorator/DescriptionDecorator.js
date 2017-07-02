import React from 'react'

const findDescriptionEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity() 
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'DESCRIPTION'
            ) 
        },
        callback
    ) 
}

const Description = (props) => {
    const { description,alreadyDes } = props.contentState.getEntity(props.entityKey).getData()
    
    return (
        <code className={'description'} >
            {props.children}
        </code>
    )
}

const findSubDescriptionEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity() 
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'SUB_DESCRIPTION'
            ) 
        },
        callback
    ) 
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
    findDescriptionEntities,
    Description,
    findSubDescriptionEntities,
    SubDescription
}


