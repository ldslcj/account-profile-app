import { Card } from "semantic-ui-react"
import { useContext } from 'react' 
import {AccountContext} from '../provider/AccountProvider'

const Account = () => {
    const {username, dateJoined, membershipLevel} = useContext(AccountContext)
    return (
        <Card>
            <Card.Content>
                <Card.Header>{username}</Card.Header>
                <Card.Meta>Date Joined: {dateJoined}</Card.Meta>
            </Card.Content>
            <Card.Content>
                <p>Membership level : {membershipLevel}</p>
            </Card.Content>
        </Card>
    )
}

export default Account