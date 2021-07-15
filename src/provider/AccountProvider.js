import React, {useState} from 'react'

export const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer

const AccountProvider = (props) => {
    const [username, setUsername] = useState('CJ')
    const [email, setEmail] = useState('test@gmail.com')
    const [membershipLevel, setMembershipLevel] = useState('Gold')
    const [dateJoined, setDateJoined] = useState('12/16/21')
    const [avatar, setAvatar] = useState('Cat')

    return(
        <AccountContext.Provider value={{
            username,
            membershipLevel,
            dateJoined,
            email,
            avatar,
            setUsername,
            setMembershipLevel,
            setEmail,
            setDateJoined,
            setAvatar
        }}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider