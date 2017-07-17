import React from 'react'
import { Tooltip } from 'antd'

const Description = props => {
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

const SubDescription = props => {
    const { subDescription } = props.contentState.getEntity(props.entityKey).getData()

    return (
        <Tooltip placement="topLeft" title={subDescription}>
            <span className={'sub-description'} style={{backgroundColor: '#ddd', borderRadius: 1.75, padding: 2}}>
                {props.children}
            </span>
        </Tooltip>
    )
}

const decorators = [
    {
        strategy: findEntities('DESCRIPTION'),
        component: Description,
    },
    {
        strategy: findEntities('SUB_DESCRIPTION'),
        component: SubDescription,
    }
]

module.exports = {
    Description,
    SubDescription,
    findEntities,
    decorators
}


