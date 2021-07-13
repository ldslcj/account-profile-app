import {useContext, useState} from 'react'
import {AccountContext} from '../provider/AccountProvider'
import { Form } from 'semantic-ui-react'

const AccountForm = () => {
    const value = useContext(AccountContext)
    const [username, setUserName] = useState(value.username)
    const [membershipLevel, setMembershipLevel] = useState(value.membershipLevel)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(membershipLevel)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                label = 'Unsername'
                type = 'text'
                value = {username}
                onChange = {(e, {value}) => setUserName(value)}
            />
            <Form.Select 
                label = 'Mebership Level'
                value = {membershipLevel}
                options = {membershipOptions}
                onChange = {(e, {value}) => setMembershipLevel(value)}
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