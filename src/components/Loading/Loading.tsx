import React from 'react'
import Style from './Loading.module.scss';


const Loading = () => {
    return (
        <div className={Style.Loading}>
            <span className={Style.loader}></span>
        </div>
    )
}

export default Loading