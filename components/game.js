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
import { connect } from 'react-redux'

// functions etc
import { 
	setOut,
	hideModal,
	showModal,
	checkGameOver,
} from '../actions/index.js'

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
		day: 0,
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>You are on the game screen</Text>
				<Modal
					style={styles.statHUD}
					transparent={true}
					visible={this.props.game.modalVisible}
					onRequestClose={()=>{}}
				>
					<View style={styles.popup}>
						<Text>You found a food store. Do you want to buy something?</Text>
						<View style={styles.buttonView}>
							<Button
								title='Buy Food'
								onPress={()=>{
									this.props.setOut()
									this.props.hideModal()
								}}
							/>
						</View>

						<View style={styles.buttonView}>
							<Button
								title='Hide Modal'
								onPress={()=>{
									this.props.hideModal()
								}}
							/>
						</View>

					</View>
				</Modal>

				{/* these components are always drawn */}
				<GameHUD
					day = {this.props.game.day}
					food = {this.props.game.food}
					gold = {this.props.game.gold}
				/>
				<GameGraphics />
				{/* appears when there is a player option */}
				<GameDialogue />
				{/* progresses game objective next encounter */}

				<View style={styles.buttonView}>
					<Button
						title='Game Button'
						onPress={()=>{
							this.props.showModal()
						}}
					/>
				</View>

				<View style={styles.buttonView}>
					<Button
						title='Next Day'
						onPress={()=>{
							this.props.setOut()
						}}
					/>
				</View>

				{/* <GameButton type='set-out' /> */}
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return { game: state.game }
}

const mapDispatchToProps = (state) => {
	return { 
		setOut,
		showModal,
		hideModal,
		checkGameOver,
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(Game)

// TODO: move to external stylesheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	popup: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000C',
	},
	buttonView: {
		marginTop: 10,
		width: 200,
	},
	statHUD: {
		position: 'absolute',
	},
})
