import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css';
import Button from "../Button/Button";
import Input from "../Input/Input";

type PropsType = {
    titleMax: number
    incMax: () => void
    decMax: () => void
    titleStart: number
    incStart: () => void
    decStart: () => void
    setToLocalStorage: () => void
    maxValue: number
    title: number
    disabledButton: () => void
    err: boolean
}

function CounterSettings(props: PropsType) {
    // const color = props.title1 < 5 ? s.title : s.dis

    return (
        <div className={s.body}>
            <div className={s.body_wrap}>

                <div className={s.input}>
                    <div className={s.color_value}>
                        <h3>MAX VALUE: </h3>
                    </div>

                    <div className={s.input_size}>
                        <Input value={props.titleMax} err={props.err}/>
                    </div>

                    <div className={s.button}>
                            <button type="submit" onClick={() => {
                                props.incMax()
                            }}>▲
                            </button>
                            <button type="submit" onClick={() => {
                                props.decMax()
                            }}>▼
                            </button>
                    </div>

                </div>
                <div className={s.input}>

                    <div className={s.color_value}>
                        <h3>START VALUE: </h3>
                    </div>
                    <div className={s.input_size}>
                        <Input value={props.titleStart} err={props.err}/>
                    </div>

                    <div className={s.button}>
                        <button onClick={() => {
                            props.incStart()
                        }}>▲
                        </button>
                        <button onClick={() => {
                            props.decStart()
                        }}>▼
                        </button>
                    </div>
                </div>

                <div className={s.btn_wrap}>

                    <Button callback={props.setToLocalStorage}
                            buttonName={'SET'}
                            title={props.title}
                            maxValue={props.maxValue}
                            disabled={props.titleStart < 0 || props.titleStart === props.titleMax}
                    />
                </div>
            </div>
        </div>
    );
}
export default CounterSettings;
