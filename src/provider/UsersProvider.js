import React, { useState } from 'react'

export const UsersContext = React.createContext()

export const UsersConsumer = UsersContext.Consumer

const UsersProvider = (props) => {
    const [users, setUsers] = useState([''])

    const addUser = (user) => {
        let newUsers = [...users, user]
        setUsers(newUsers)
    }
    return(
        <UsersContext.Provider value={{
            users,
            setUsers,
            addUser
        }
        }
        >
            {props.children}
        </UsersContext.Provider>
    )

}

export default UsersProvider 
