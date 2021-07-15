import {useContext, useState} from 'react'
import {AccountContext} from '../provider/AccountProvider'
import { Form } from 'semantic-ui-react'

const AccountForm = () => {
    const account = useContext(AccountContext)
    const [username, setUsername] = useState(account.username)
    const [membershipLevel, setMembershipLevel] = useState(account.membershipLevel)
    const [avatar, setAvatar] = useState(account.avatar)

    const handleSubmit = (e) => {
        e.preventDefault()
        account.setUsername(username)
        account.setMembershipLevel(membershipLevel)
        account.setAvatar(avatar)
        console.log(username)
        console.log(membershipLevel)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                label = 'Unsername'
                type = 'text'
                value = {username}
                onChange = {(e, {value}) => setUsername(value)}
            />
            <Form.Select 
                label = 'Mebership Level'
                value = {membershipLevel}
                options = {membershipOptions}
                onChange = {(e, {value}) => setMembershipLevel(value)}
            />
            <Form.Input 
                label = 'Avatar'
                type = 'text'
                value = {avatar}
                onChange = {(e, {value}) => setAvatar(value)}
            />
            <Form.Button primary>Save</Form.Button>
        </Form>
    )
}

const membershipOptions = [
    { key: 'b', value: 'Bronze', text: 'Bronze' },
    { key: 's', value: 'Silver', text: 'Silver' },
    { key: 'g', value: 'Gold', text: 'Gold' },
]

export default AccountForm