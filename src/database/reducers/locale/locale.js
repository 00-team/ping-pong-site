import { CHANGE_LOCALE } from './types'

// all locales
import data from '../../locale.json'

const defualtLangIndex = 1
const AllowdLocales = data.map(d => d.locale)

const initState = {
    locale: AllowdLocales[defualtLangIndex] || null,
    localeData: data[defualtLangIndex],
}

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LOCALE:
            if (AllowdLocales.includes(action.payload)) {
                return {
                    ...state,
                    locale: action.payload,
                    localeData: data.find(l => l.locale === action.payload),
                }
            } else return state

        default:
            return state
    }
}
