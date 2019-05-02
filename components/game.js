// important items
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// get components
import GameHUD from './game-hud.js'
import GameGraphics from './game-graphics.js'
import GameDialogue from './game-dialogue.js'
import GameButton from './game-button.js'

// the primary object in the app
class Game extends Component {
	render() {
		return (
			<View>
				<Text>You are on the game screen</Text>
				{/* these components are always drawn */}
				<GameHUD />
				<GameGraphics />
				{/* appears when there is a player option */}
				<GameDialogue />
				{/* progresses game objective; next encounter */}
				<GameButton type='set-out' />
			</View>
		)
	}
}

export default Game
