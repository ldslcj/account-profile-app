import { Card } from "semantic-ui-react"

const Account = () => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Username</Card.Header>
                <Card.Meta>Date Joined: datejoined</Card.Meta>
            </Card.Content>
            <Card.Content>
                <p>Membership level : membershipLevel</p>
            </Card.Content>
        </Card>
    )
}

export default Account