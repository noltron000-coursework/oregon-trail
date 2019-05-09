export const SET_OUT = 'SET_OUT'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SHOW_MODAL = 'SHOW_MODAL'
export const CHECK_GAME_OVER = 'CHECK_GAME_OVER'

export const setOut = () => {
	return {
		type: SET_OUT
	}
}

export const hideModal = () => {
	return {
		type: HIDE_MODAL
	}
}

export const showModal = () => {
	return {
		type: SHOW_MODAL
	}
}

export const checkGameOver = () => {
	return { 
		type: CHECK_GAME_OVER
	}
}
