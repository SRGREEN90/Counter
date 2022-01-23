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
    incStartCounterSettingsAC, setValueFromLocalStorageAC
} from "./bll/counter-settings-reducer";

function App() {


    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counterSettings.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counterSettings.startValue)

    const dispatch = useDispatch()


    //  const [counter, setCounter] = useState<number>(0)
    let increment = () => {
        dispatch(incrementCounterAC())
        // setCounter(counter + 1)
    }
    let reset = () => {
        dispatch(resetCounterAC(startValue))
        // setCounter(settingsStart)
    }


    // const [settingsStart, setSettingsStart] = useState(0)
    let incStart = () => {
        dispatch(incStartCounterSettingsAC())
        //   setSettingsStart(settingsStart + 1)
    }
    let decStart = () => {
        dispatch(decStartCounterSettingsAC())
        /// setSettingsStart(settingsStart - 1)
    }


    // const [settingsMax, setSettingsMax] = useState<number>(10)
    let incMax = () => {
        dispatch(incMaxCounterSettingsAC())
        //  setSettingsMax(settingsMax + 1)
    }
    let decMax = () => {
        dispatch(decMaxCounterSettingsAC())
        //setSettingsMax(settingsMax - 1)
    }


    //const [maxValue, setMaxvalue] = useState(settingsMax)

    const [disabled, setDisabled] = useState<boolean>(false)

    // useEffect(() => {
    //     setToLocalStorage()
    // }, [startValue, maxValue])


    useEffect(() => {
        getToLocalStorage()
    }, [])

    const setToLocalStorage = () => {
        localStorage.setItem('settingsMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('settingsStartValue', JSON.stringify(startValue))
        dispatch(resetCounterAC(startValue))
    }

    const getToLocalStorage = () => {
        let strMaximum = localStorage.getItem('settingsMaxValue')
        let strStart = localStorage.getItem('settingsStartValue')
        if (strMaximum && strStart) {
            let maxValue = JSON.parse(strMaximum)
            let startValue = JSON.parse(strStart)
            dispatch(setValueFromLocalStorageAC(maxValue, startValue))
            dispatch(resetCounterAC(startValue))

        }
    }


    const disabledButton = () => {
        if (maxValue) {
            setDisabled(true)
        }
    }
    const err = startValue < 0 || startValue === maxValue || startValue > maxValue

    return (
        <div className="App2">
            <div className='set'>

                <CounterSettings
                    titleMax={maxValue}
                    incMax={incMax}
                    decMax={decMax}
                    maxValue={maxValue}
                    err={err}
                    titleStart={startValue}
                    incStart={incStart}
                    decStart={decStart}
                    setToLocalStorage={setToLocalStorage}
                    disabledButton={disabledButton}
                />
            </div>

            <div className='inc'>

                <Counter

                    increment={increment}
                    title={value}  //its.ok
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
