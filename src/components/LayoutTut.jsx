import React, { useLayoutEffect } from 'react'

const LayoutTut = () => {

    useLayoutEffect(() => {

        console.log("first")
        
    }, [])

    return (
        <div>LayoutTut</div>
    )
}

export default LayoutTut