export const SET_OUT = 'SET_OUT'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SHOW_MODAL = 'SHOW_MODAL'
export const CHECK_GAME_OVER = 'CHECK_GAME_OVER'
export const BUY_FOOD = 'BUY_FOOD'
export const SELL_FOOD = 'SELL_FOOD'

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

export const buyFood = () => {
	return { 
		type: BUY_FOOD
	}
}

export const sellFood = () => {
	return { 
		type: SELL_FOOD
	}
}

export const checkGameOver = () => {
	return { 
		type: CHECK_GAME_OVER
	}
}
