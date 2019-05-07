import { SET_OUT, setOut } from '../actions/index.js'

export default gameReducer = (state={day: 99}, action) => {
	const newState = { ...state }
	switch (action.type) {
		case SET_OUT:
			newState.day += 1
			return newState

		default: 
			return state
	}
}
