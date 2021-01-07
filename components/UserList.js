import React from 'react'
import { useEffect, useState } from 'react';
import User from './User';

const UserList = ({users, onSetUsers}) => {
    useEffect(() => {
        // get all users
        fetch('/api/user')
        .then(response => response.json())
        .then( data => {
            onSetUsers(data)
        }
        );
        return () => {
        }
    }, [])
    return (
        <div className="users">
            <h1>This is user Listings</h1>
            {users.map( user => <User key={user.id} {...user} />)}
        </div>
    )
}

export default UserList
