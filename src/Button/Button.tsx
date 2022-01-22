import React from "react";
import s from "../Button/Button.module.css";

type PropsType = {
    title: number
    maxValue: number
    callback: () => void
    buttonName: string
    disabled: boolean

}
const Button = ({title, maxValue, callback ,disabled, buttonName, ...props }: PropsType) => {


    return (
        <div className={s.button_content}>
            <button className={s.button} disabled={disabled}  onClick={() => {callback()}}>
                {buttonName}
            </button>
        </div>
    )
}

export default Button