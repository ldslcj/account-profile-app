import React from 'react'
import { Form } from 'semantic-ui-react'
import { AccountConsumer, AccountContext } from '../provider/AccountProvider'

class AccountFormClass extends React.Component {
    state = {
        username: this.props.username,
        membershipLevel: this.props.membershipLevel,
        avatar: this.props.avatar
    }
    handleSubmit = (e) => {
        const {username, membershipLevel, avatar} = this.state
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
        <>
        <h1>title: {this.props.title}</h1>
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
            <Form.Select 
                label = 'Avatar'
                type = 'text'
                name='avatar'
                value = {avatar}
                onChange = {this.handleChange}
            />
            <Form.Button primary>Save</Form.Button>
        </Form>
        </>
    )
    }
}

const connectedAccountForm  = (props) => {
    return(
        <AccountConsumer>
            {value => (<AccountFormClass
                            {...props}
                            username={value.username}
                            membershipLevel={value.membershipLevel}
                            avatar={avatar} />)}
        </AccountConsumer>
    )
}

const membershipOptions = [
    { key: 'b', value: 'Bronze', text: 'Bronze' },
    { key: 's', value: 'Silver', text: 'Silver' },
    { key: 'g', value: 'Gold', text: 'Gold' },
]

export default connectedAccountForm
// export default AccountFormClass