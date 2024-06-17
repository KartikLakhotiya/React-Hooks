import React, { useRef } from 'react'

const Ref = () => {

    const inputRef = useRef(null)
    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>UseRef Hook</h1>
            <input type="text" name="" id="" placeholder='Enter Something...' ref={inputRef} />
            <button onClick={onClick}>Click to focus</button>
        </div>
    )
}

export default Ref