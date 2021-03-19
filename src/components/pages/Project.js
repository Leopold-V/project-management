import React from 'react'

export const Project = (props) => {

    const id = props.match.params.id;

    return (
        <div>
            Project page {id}
        </div>
    )
}
