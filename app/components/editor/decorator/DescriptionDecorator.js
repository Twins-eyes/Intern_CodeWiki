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
    const { description } = props.contentState.getEntity(props.entityKey).getData()

    return (
        <div onMouseOver={() => changeDesFunction(description)} onMouseOut={() => changeDesFunction('')}>
            <code className={'sub-description'} style={{backgroundColor: 'red'}}>
                {props.children}
            </code>
        </div>
    )
}

module.exports = {
    findDescriptionEntities,
    Description,
    findSubDescriptionEntities,
    SubDescription
}


