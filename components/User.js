import React from 'react'

const User = ({id, name}) => {
    return (
        <div className="user">
            <div className="user__id">{id}</div>
            <div className="user__namme">{name}</div>
        </div>
    )
}

export default User
