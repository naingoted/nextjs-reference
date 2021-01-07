import {useState} from 'react'

const CreateUser = ({onSetUsers}) => {
    const [ name, setName] = useState("");
    const [ userId, setUserId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        // post data
        fetch('/api/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: userId, name}),
        }).then(response => response.json())
        .then(data => {
          onSetUsers(data)
        })
        setName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userId">ID</label>
            <input name="userId" value={userId} onChange={ e => setUserId(e.target.value)} /><br></br>
            <label htmlFor="name">Name</label>
            <input name="name" value={name} onChange={ e => setName(e.target.value)} /><br></br>   
            <input type="submit" value="Submit" />
      </form>
    )
}

export default CreateUser