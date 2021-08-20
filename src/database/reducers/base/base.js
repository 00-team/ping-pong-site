import { SET_SIZE } from './types'

const initState = {
    windowWidth: window.innerWidth,
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_SIZE:
            return {
                ...state,
                windowWidth: action.payload
            }
        default:
            return state
    }
}
