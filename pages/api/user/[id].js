import {users} from './index';

export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req
  switch (method) {
    case 'GET':
      // Get data from your databasez
      let user = users.filter(x => x.id == id )
      res.status(200).json(user[0])
      break
    case 'PUT':
      // Update or create data in your database
      let updatedUsers = users.filter(x => x.id != id )
      updatedUsers.push(req.body)
      users = updatedUsers;
      res.status(200).json(users);
      break
    case 'DELETE':


    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
