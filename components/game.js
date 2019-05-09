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
import { setOut } from '../actions/index.js'

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

	setModalVisible(visible) {
		this.setState({modalVisible: visible})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>You are on the game screen</Text>
				<Modal
					style={styles.statHUD}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={()=>{}}
				>
					<View style={styles.popup}>
						<Text>You found a food store. Do you want to buy something?</Text>
						<View style={styles.buttonView}>
							<Button
								title='Buy Food'
								onPress={()=>{
									let {gold, food, day} = this.state
									this.setState({gold: gold-1, food: food+1})
									this.setModalVisible(!this.state.modalVisible)
								}}
							/>
						</View>

						<View style={styles.buttonView}>
							<Button
								title='Hide Modal'
								onPress={()=>{
									this.setModalVisible(!this.state.modalVisible)
								}}
							/>
						</View>

					</View>
				</Modal>

				{/* these components are always drawn */}
				<GameHUD
					day = {this.props.game.day}
					food = {this.state.food}
					gold = {this.state.gold}
				/>
				<GameGraphics />
				{/* appears when there is a player option */}
				<GameDialogue />
				{/* progresses game objective next encounter */}

				<View style={styles.buttonView}>
					<Button
						title='Game Button'
						onPress={()=>{
							let {gold, food, day} = this.state
							this.setState({day: day+1, food: food-1})
							this.setModalVisible(!this.state.modalVisible)
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
	return { setOut }
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
