import { CHANGE_LOCALE } from './types'

// all locales
import data from '../../locale.json'

const AllowdLocales = data.map(d => d.locale)

const initState = {
    locale: AllowdLocales[0] || null,
    localeData: data[0]
}

export default (state=initState, action) => {
    switch (action.type) {
        case CHANGE_LOCALE:
            if (AllowdLocales.includes(action.payload)) {
                return {
                    ...state,
                    locale: action.payload,
                    localeData: data.find(l => l.locale === action.payload)
                }
            } else return state
            
        default:
            return state
    }
}
