// important items
import React, { Component } from 'react';
import { View } from 'react-native';

// get components
import GameHud from './game-hud.js'
import GameGraphics from './game-graphics.js'
import GameDialogue from './game-dialogue.js'
import GameButton from './game-button.js'

// the primary object in the app
export default class Game extends Component {
	render() {
		return (
			<View>
				{/* these components are always drawn */}
				<GameHud />
				<GameGraphics />
				{/* appears when there is a player option */}
				<GameDialogue />
				{/* progresses game objective; next encounter */}
				<GameButton type='set-out' />
			</View>
		)
	}
}
