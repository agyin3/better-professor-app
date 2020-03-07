import { combineReducers } from 'redux'
import { professors } from './professors.js'
import { students } from './students.js'

export default combineReducers({
    professors,
    students
})