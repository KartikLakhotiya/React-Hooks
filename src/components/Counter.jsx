// useState tutorial

import React, { useState } from 'react'

// const Counter = () => {

//     const [count, setCount] = useState(0)

//     const handleCount = () => {
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             <h1>Counter</h1>
//             <button onClick={handleCount}>Click to increment</button>
//             <h1>Count is : {count}</h1>
//         </div>
//     )
// }

// export default Counter


const Counter = () => {

    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <input type="text" name="" id="" placeholder='Enter Something' onChange={handleInputChange} />
            <h1>{input}</h1>
        </div>
    )
}

export default Counter