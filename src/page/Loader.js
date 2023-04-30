import React from 'react'
import loader from "../image/GIF-500-500.gif"
const Loader = () => {


    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
            <img src={loader} alt="loading..." />
        </div>
    )
}

export default Loader