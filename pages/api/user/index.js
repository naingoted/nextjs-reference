export const users = [
    { id: 1, name: 'John Doe' }, 
    { id: 2, name : 'Chelsea Chng' }, 
    { id: 3 , name: 'Daphne Long' }
]

export default function handler(req, res) {
    const {
        method,
    } = req
    // Get data from your database
    switch (method) {
        case 'GET':
          // Get data from your databasez
          res.status(200).json(users)
          break
        case 'POST':
            console.log(req.body)
            users.push(req.body);

          // Update or create data in your database
            res.status(200).json(users)
          break
        default:
          res.setHeader('Allow', ['GET', 'POST'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
}