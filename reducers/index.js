import { combineReducers } from 'redux'
import gameReducer from './game-reducer.js'

export default combineReducers({
	game: gameReducer
})
