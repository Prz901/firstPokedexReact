import React, { useState, useEffect } from 'react'


const TestUseEffect = () => {

    const [name, setName] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        console.log('qualquer coisa ne caralho')
    }, [name, user])

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
    )

}
export default TestUseEffect