import React from 'react'
import { Form } from 'semantic-ui-react'

class AccountFormClass extends React.Component {
    state = {
        username:'',
        membershipLevel:''
    }
    handleSubmit = (e) => {
        const {username, membershipLevel} = this.state
        e.preventDefault()
        console.log(username)
        console.log(membershipLevel)
    }
    handleChange = (e, {value, name}) => {
        this.setState({[name]: value})
    }

    render () {
    const {username, membershipLevel} = this.state
    return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Input 
                label = 'Unsername'
                type = 'text'
                name='username'
                value = {username}
                onChange = {this.handleChange}
            />
            <Form.Select 
                label = 'Mebership Level'
                name='membershipLevel'
                value = {membershipLevel}
                options = {membershipOptions}
                onChange = {this.handleChange}
            />
            <Form.Button primary>Save</Form.Button>
        </Form>
    )
    }
}
const membershipOptions = [
    { key: 'b', value: 'Bronze', text: 'Bronze' },
    { key: 's', value: 'Silver', text: 'Silver' },
    { key: 'g', value: 'Gold', text: 'Gold' },
]

export default AccountFormClass