import React, {useEffect, useState} from 'react';
import './App2.css';
import Counter from "./Counter/Counter";
import CounterSettings from "./CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incrementCounterAC, resetCounterAC} from "./bll/counter-reducer";
import {
    decMaxCounterSettingsAC,
    decStartCounterSettingsAC,
    incMaxCounterSettingsAC,
    incStartCounterSettingsAC
} from "./bll/counter-settings-reducer";

function App() {


    const value1 = useSelector<AppStateType, number>(state => state.counter.value)
    const value2 = useSelector<AppStateType, number>(state => state.counterSettings.value)

    const dispatch = useDispatch()


    const [counter, setCounter] = useState<number>(0)
    let increment = () => {
        dispatch(incrementCounterAC())
        // setCounter(counter + 1)
    }
    let reset = () => {
        dispatch(resetCounterAC(settingsStart))
        // setCounter(settingsStart)
    }


    const [settingsStart, setSettingsStart] = useState(0)
    let incStart = () => {
        dispatch(incStartCounterSettingsAC())
        //   setSettingsStart(settingsStart + 1)
    }
    let decStart = () => {
        dispatch(decStartCounterSettingsAC())
        /// setSettingsStart(settingsStart - 1)
    }


    const [settingsMax, setSettingsMax] = useState<number>(0)
    let incMax = () => {
        dispatch(incMaxCounterSettingsAC())
        //  setSettingsMax(settingsMax + 1)
    }
    let decMax = () => {
        dispatch(decMaxCounterSettingsAC())
        //setSettingsMax(settingsMax - 1)
    }


    const [maxValue, setMaxvalue] = useState(settingsMax)

    const [disabled, setDisabled] = useState<boolean>(false)

    useEffect(() => {
        getToLocalStorage()
    }, [])

    const setToLocalStorage = () => {
        localStorage.setItem('settingsMaxValue', JSON.stringify(settingsMax))
        localStorage.setItem('settingsStartValue', JSON.stringify(settingsStart))
        setCounter(settingsStart)
        setMaxvalue(settingsMax)
    }

    const getToLocalStorage = () => {
        let strMaximum = localStorage.getItem('settingsMaxValue')
        let strStart = localStorage.getItem('settingsStartValue')
        if (strMaximum && strStart) {
            let newMaximum = JSON.parse(strMaximum)
            setSettingsMax(newMaximum)
            let newStart = JSON.parse(strStart)
            setSettingsStart(newStart)
            setCounter(newStart)
        }
    }


    const disabledButton = () => {
        if (maxValue) {
            setDisabled(true)
        }
    }
    const err = settingsStart < 0 || settingsStart === settingsMax || settingsStart > settingsMax

    return (
        <div className="App2">
            <div className='set'>

                <CounterSettings

                    titleMax={settingsMax}
                    incMax={incMax}
                    decMax={decMax}
                    maxValue={maxValue}
                    err={err}
                    titleStart={settingsStart}
                    incStart={incStart}
                    decStart={decStart}
                    title={counter}
                    setToLocalStorage={setToLocalStorage}
                    disabledButton={disabledButton}
                />
            </div>

            <div className='inc'>

                <Counter

                    increment={increment}
                    title={value1}  //its.ok
                    reset={reset}
                    maxValue={maxValue}
                    disabledButton={disabledButton}
                    err={err}
                />
            </div>
        </div>

    );
}

export default App;
