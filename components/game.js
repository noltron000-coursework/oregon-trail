// important items
import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
	TouchableHighlight,
	Modal,
	StyleSheet,
} from 'react-native'

// get components
import GameHUD from './game-hud.js'
import GameGraphics from './game-graphics.js'
import GameDialogue from './game-dialogue.js'
import GameButton from './game-button.js'

// the primary object in the app
class Game extends Component {
	state = {
		modalVisible: true,
		gold: 20,
		food: 10,
		days: 0,
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>You are on the game screen</Text>
				<Modal
					transparent={true}
					visible={this.state.modalVisible}
				>
					<View style={styles.popup}>
						<Button
							title='Buy Food'
							onPress={()=>{
								let {gold, food, days} = this.state
								this.setState({gold: gold-1, food: food+1})
							}}
						/>
						<Button
							title='Hide Modal'
							onPress={()=>{
								this.setModalVisible(!this.state.modalVisible)
							}}
						/>
					</View>
				</Modal>
				{/* these components are always drawn */}
				<GameHUD />
				<Text>days: {this.state.days}</Text>
				<Text>food: {this.state.food}</Text>
				<Text>gold: {this.state.gold}</Text>
				<GameGraphics />
				{/* appears when there is a player option */}
				<GameDialogue />
				{/* progresses game objective; next encounter */}
				<Button
					title='Game Button'
					onPress={()=>{
						let {gold, food, days} = this.state
						this.setState({days: days+1, food: food-1})
						this.setModalVisible(!this.state.modalVisible)
					}}
				/>
				{/* <GameButton type='set-out' /> */}
			</View>
		)
	}
}

export default Game

// TODO: move to external stylesheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	popup: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
	}
})
