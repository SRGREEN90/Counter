import React from 'react';
import s from './Counter.module.css';
import Button from "../Button/Button";

type PropsType = {
    title: number
    increment: () => void
    reset: () => void
    maxValue: number
    disabledButton: ()=>void
    err:boolean
}

function Counter(props: PropsType) {
    const color = props.title < props.maxValue ? s.title : s.dis;

    return (
        <div className={s.body}>
            <div className={s.body_wrap}>

                    <span className={`${s.counter} ${color}`}>{props.err ? <div className={s.danger}>Incorrect Value!</div> : props.title}</span>

                <div className={s.btn_wrap}>

                     <Button buttonName={'inc'}
                             disabled={props.title >= props.maxValue }
                             title={props.title}
                             maxValue={props.maxValue}
                             callback={props.increment}
                     />

                     <Button buttonName={'reset'}
                             title={props.title}
                             maxValue={props.maxValue}
                             callback={props.reset}
                             disabled={ props.title === 0}
                     />
                </div>
            </div>
        </div>
    );
}

export default Counter;
