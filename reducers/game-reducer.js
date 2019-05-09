import {
	SET_OUT,
	SHOW_MODAL,
	HIDE_MODAL,
	CHECK_GAME_OVER,
	setOut,
	showModal,
	hideModal,
	checkGameOver,
} from '../actions/index.js'

const State = {
	modalVisible: false, 
	day: 0,
	food: 0,
	gold: 30,
}

export default gameReducer = (OldState=State, action) => {
	const NewState = { ...OldState }
	switch (action.type) {

		case SET_OUT:
			NewState.day += 1
			NewState.food -= 1
			return NewState

		case CHECK_GAME_OVER:
			// check lose conditions before win conditions
			if (OldState.food <= 0) {
				NewState.food = 0
				console.log("you lost!")
			} else if (OldState.day >= 30) {
				// check win conditions if no lose
				console.log("you won!")
			}
			// always return NewState
			return NewState

		case HIDE_MODAL:
			NewState.modalVisible = false
			return NewState

		case SHOW_MODAL:
			NewState.modalVisible = true
			return NewState

		default: 
			return NewState
	}
}
