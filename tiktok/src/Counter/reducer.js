import {initState, INCREMENT, DECREMENT, RESET} from './constants'
//Reducer:
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case RESET:
            return 0
        default:
            throw Error('Invalid actions')
    }
}

export default reducer