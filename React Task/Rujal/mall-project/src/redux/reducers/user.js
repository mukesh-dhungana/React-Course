import * as actionType from '../actionType'

const initialInit = {
    loading: false,
}

const user = (state = initialInit, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case actionType.LOGIN_FAILURE:
            return {
                ...state,
                loading: false
            }

    

        default: return state
    }
}

export default user