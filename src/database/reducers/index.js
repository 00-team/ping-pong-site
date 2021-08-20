import { combineReducers } from 'redux';

// locale's
import locale from './locale/locale'

// base
import base from './base/base';

export default combineReducers({
    Locale: locale,
    Base: base,
});
