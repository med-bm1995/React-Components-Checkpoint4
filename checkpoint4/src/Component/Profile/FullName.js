import userEvent from '@testing-library/user-event'
import React from 'react'
const user = {
    name: 'med', email: 'benmessaoud@gmail.com', addres: 'tunis'
}
function FullName() {
    return (
        <div>

            <label>name</label>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.tunis}</p>
        </div>
    )
}

export default FullName
