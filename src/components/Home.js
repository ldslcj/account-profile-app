import {useContext} from 'react'
import {AccountContext} from '../provider/AccountProvider'
import { UsersContext } from '../provider/UsersProvider'

const Home = () => {

    const {email, username, membershipLevel, avatar} = useContext(AccountContext)
    const {users} = useContext(UsersContext)
    return (
        <div>
            <h1>Home!</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Membership: {membershipLevel}</p>
            <p>Avatar: {avatar}</p>
            {users.map( u => <p>{u}</p>)}
        </div>
    )
}

export default Home