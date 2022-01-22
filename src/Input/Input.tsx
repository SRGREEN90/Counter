import React from "react";
import s from './Input.module.css'


type InputPropsType = {
    value: number
    err: boolean
}
const Input = (props: InputPropsType) => {
    return(
        <div >
            <input type='text' className={props.err ? `${s.danger}  ${s.input}`: s.input} value={props.value}/>
        </div>

    )
}

export default Input