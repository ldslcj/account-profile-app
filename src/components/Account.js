import { Card } from "semantic-ui-react"
import { useContext } from 'react' 
import {AccountContext} from '../provider/AccountProvider'

const Account = () => {
    const {username, dateJoined, membershipLevel, avatar} = useContext(AccountContext)
    return (
        <Card>
            <Card.Content>
                <Card.Header>{username}</Card.Header>
                <Card.Meta>Date Joined: {dateJoined}</Card.Meta>
            </Card.Content>
            <Card.Content>
                <p>Membership level : {membershipLevel}</p>
            </Card.Content>
            <Card.Content>
                <p>User Avatar: : {avatar}</p>
            </Card.Content>
        </Card>
    )
}

export default Account