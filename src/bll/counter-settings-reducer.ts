import {Dispatch} from "redux";

export const INC_START_COUNTER_SETTINGS = 'SG/INC_START_COUNTER_SETTINGS'
export const DEC_START_COUNTER_SETTINGS = 'SG/DEC_START_COUNTER_SETTINGS'

export const INC_MAX_COUNTER_SETTINGS = 'SG/INC_MAX_COUNTER_SETTINGS'
export const DEC_MAX_COUNTER_SETTINGS = 'SG/DEC_MAX_COUNTER_SETTINGS'

export const SET_VALUE_FROM_LOCAL_STORAGE = 'SG/SET_VALUE_FROM_LOCAL_STORAGE='



const initialState = {
    startValue: 0,
    maxValue: 10

}
type initialStateType = typeof initialState

export const counterSettingsReducer = (state: initialStateType = initialState, action: MainType): initialStateType => {
    switch (action.type) {
        case INC_START_COUNTER_SETTINGS:
            return {...state, startValue: state.startValue + 1}
        case DEC_START_COUNTER_SETTINGS:
           return {...state, startValue: state.startValue - 1}

        case INC_MAX_COUNTER_SETTINGS:
            return {...state, maxValue: state.maxValue + 1}
        case DEC_MAX_COUNTER_SETTINGS:
           return {...state, maxValue: state.maxValue - 1}

        case SET_VALUE_FROM_LOCAL_STORAGE:
            return {...state,
                startValue: action.startValue,
                maxValue: action. maxValue
            }

        default:
            return state
    }
}

type MainType = incStartCounterSettingsACType
    | decStartCounterSettingsACType | incMaxCounterSettingsACType
    | decMaxCounterSettingsACType | setValueFromLocalStorageACType

type incStartCounterSettingsACType = ReturnType<typeof incStartCounterSettingsAC>
type decStartCounterSettingsACType = ReturnType<typeof decStartCounterSettingsAC>

type incMaxCounterSettingsACType = ReturnType<typeof incMaxCounterSettingsAC>
type decMaxCounterSettingsACType = ReturnType<typeof decMaxCounterSettingsAC>

type setValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>



export const incStartCounterSettingsAC = () => ({type: INC_START_COUNTER_SETTINGS, } as const)
export const decStartCounterSettingsAC = () => ({type: DEC_START_COUNTER_SETTINGS}as const)

export const incMaxCounterSettingsAC = () => ({type: INC_MAX_COUNTER_SETTINGS}as const)
export const decMaxCounterSettingsAC = () => ({type: DEC_MAX_COUNTER_SETTINGS}as const)

export const setValueFromLocalStorageAC = (maxValue: number, startValue: number ) =>
    ({type: SET_VALUE_FROM_LOCAL_STORAGE, startValue, maxValue }as const)

//THUNK

const incValue = (settingsMax: number,settingsStart: number)=> (dispatch: Dispatch)=> {
    localStorage.setItem('settingsMaxValue', JSON.stringify(settingsMax))
    localStorage.setItem('settingsStartValue', JSON.stringify(settingsStart))
}
