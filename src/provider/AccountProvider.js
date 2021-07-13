import React, {useState} from 'react'

export const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer

const AccountProvider = (props) => {
    const [username, setUsername] = useState('CJ')
    const [membershipLevel, setMembershipLevel] = useState('Gold')
    const [dateJoined, setDateJoined] = useState('12/16/21')

    return(
        <AccountContext.Provider value={{
            username,
            membershipLevel,
            dateJoined
        }}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider