import React, { useEffect, useState } from 'react'
import Count from './Count'
import IsFive from './IsFive'

const MyApp = () => {


    const [numbers, SetNumbers] = useState([1, 2, 3])
    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)

    const addNumber = () => {
        const newNumber = Math.round(Math.random() * 10)
        SetNumbers((n) => [...n, newNumber])
    }

    useEffect(() => {
        console.log('setup func is called');
        console.log({ currentState: numbers })
        return () => {
            console.log({ oldState: numbers })
            console.log('cleanup func is called')
        }
    }, [numbers])
    return (
        <div>
            <h1>My app</h1>
            <ul>
                {numbers.map((num, idx) => <li key={idx}>{num}</li>)}
            </ul>
            <button onClick={addNumber}>add number</button>
            <div>
                <h1>Count1</h1>
                <Count value={val1} />
                <button onClick={() => setVal1(val1 + 1)}>+</button>
            </div>
            <div>
                <h1>Count1</h1>
                <Count value={val2} />
                <button onClick={() => setVal2(val2 + 1)}>+</button>
            </div>
            <IsFive value={val2} />
        </div>
    )
}

export default MyApp