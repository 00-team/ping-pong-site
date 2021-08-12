import { combineReducers } from 'redux';

// locale's
import locale from './locale/locale'

// navbar
import navbar from './navbar/navbar'


export default combineReducers({
    Locale: locale,
    Navbar: navbar
});
