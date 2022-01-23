export const INCREMENT_COUNTER = 'SG/INCREMENT_COUNTER'
export const RESET_COUNTER = 'SG/RESET_COUNTER'


const initialState = {
    value: 0

}
type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: MainType): initialStateType => {

    switch (action.type) {
        case INCREMENT_COUNTER:
        return {...state, value: state.value + 1}
        case RESET_COUNTER:
            console.log(action.payload.value)
            return {...state, value: action.payload.value}
        default:
            return state
    }
}

type MainType = incrementCounterACType | resetCounterACType
type incrementCounterACType = ReturnType<typeof incrementCounterAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>

export const incrementCounterAC = () => ({type: INCREMENT_COUNTER} as const)
export const resetCounterAC = (value: number) => ({type: RESET_COUNTER, payload: {value}}as const)



