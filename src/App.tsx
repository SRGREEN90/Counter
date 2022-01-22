import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSettings from "./CounterSettings/CounterSettings";

function App() {
    const [counter, setCounter] = useState<number>(0)
    const [maxValue, setMaxvalue] = useState(5)
    const [disabled, setDisabled] = useState<boolean>(false)
    let increment = () => {
        setCounter(counter + 1)
    }
    let reset = () => {
        setCounter(settingsStart)
    }


    const [settingsMax, setSettingsMax] = useState<number>(10)
    let incMax = () => {
        setSettingsMax(settingsMax + 1)
    }
    let decMax = () => {
        setSettingsMax(settingsMax - 1)
    }

    const [settingsStart, setSettingsStart] = useState<number>(0)
    let incStart = () => {
        setSettingsStart(settingsStart + 1)
    }
    let decStart = () => {
        setSettingsStart(settingsStart - 1)
    }

    useEffect(() => {getToLocalStorage()},[ ])

    console.log(settingsMax)

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
        }
    }
    const disabledButton = () => {
        if(maxValue) {
            setDisabled(true)
        }
    }
    const err = settingsStart < 0 ||  settingsStart === settingsMax || settingsStart > settingsMax

    return (
        <div className="App">
            <div>


            <Counter increment={increment}
                     title={counter}
                     reset={reset}
                     maxValue={maxValue}
                     disabledButton={disabledButton}
                     err={err}
            />

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
        </div>
    );
}

export default App;
