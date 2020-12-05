import userEvent from '@testing-library/user-event'
import React from 'react'
const add = {
    ville: 'TUNIS', codepostal: '2017'
}
function Address() {
    return (
        <div>

            <label>Address</label>
            <h3>{add.ville}</h3>
            <p>{add.codepostal}</p>


        </div>
    )
}

export default Address
