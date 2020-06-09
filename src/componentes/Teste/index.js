import React, { useState, useEffect } from 'react'


const Teste = () => {

    const [number, setSum] = useState(0)

    function sumNumber() {
        const auxNumber = number + 1
        setSum(auxNumber)
    }

    return (
        <div>
            <p>{number}</p>
            <button onClick={sumNumber} type="button">Click Me!</button>
        </div>
    )
}

export default Teste