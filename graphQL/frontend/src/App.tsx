import { useQuery } from '@apollo/client'
import NewUserForm from './components/NewUserForm'
import { GET_USERS } from './lib/user'

type User = {
  id: string
  name: string
}


export default () => {

  const { data } = useQuery<{ users: User[] }>(GET_USERS)

  return (
    < >
      <h1> User List</h1>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <NewUserForm />
    </>
  )
}
