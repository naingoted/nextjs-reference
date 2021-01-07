
import UserList from '../components/UserList'
import CreateUser from '../components/CreateUser'
import {useState} from 'react'

const user = () => {
    // common state     
    const [users, setUsers] = useState([])
    return (
        <>
            <UserList onSetUsers={setUsers} users={users}/>
            <CreateUser onSetUsers={setUsers}/>
        </>
    )
}

export default user

