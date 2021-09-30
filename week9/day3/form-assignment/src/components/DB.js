import React from 'react'

export default function DB(props) {
    const { users } = props
    // const { setUser } = props
    console.log(users)
    return (
        <div>
            <h1>Thanks for Signing Up!</h1>
            
              <p> {users[0].firstName}</p>
            
        </div>
    )
}
