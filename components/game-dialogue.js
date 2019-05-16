// important items
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	View, 
	Text,
	Button,
	Modal,
	StyleSheet,
} from 'react-native'

// functions etc
import { 
	setOut,
	buyFood,
	sellFood,
	hideModal,
	showModal,
	checkGameOver,
} from '../actions/index.js'

// the primary object in the app
class GameDialogue extends Component {
	render() {
		return (
				<Modal
					transparent={ true }
					visible={this.props.game.modalVisible}
					style={styles.statHUD}
					onRequestClose={ () => {} }
				>

					<View style={styles.popup}>
						<Text>
							You found a food store.
							Do you want to buy something?
						</Text>

						<View style={styles.buttonView}>
							<Button
								title='Buy Food (-1 Gold; +20 Food)'
								disabled={ this.props.gold < 1 }
								// ^^^ THIS IS NOT ACTIVATING
								onPress={ () => {
									this.props.buyFood()
								}}
							/>
						</View>

						<View style={styles.buttonView}>
							<Button
								title='Sell Food (+1 Gold; -30 Food)'
								disabled={ this.props.food < 30 }
								// ^^^ THIS IS NOT ACTIVATING
								onPress={ () => {
									this.props.sellFood()
								}}
							/>
						</View>

						<View style={styles.buttonView}>
							<Button
								title='Leave Store'
								onPress={ () => {
									this.props.hideModal()
								}}
							/>
						</View>
					</View>

				</Modal>
		)
	}
}

const mapStateToProps = (state) => {
	return { game: state.game }
}

const mapDispatchToProps = (state) => {
	return { 
		setOut,
		buyFood,
		sellFood,
		hideModal,
		showModal,
		checkGameOver,
	}
}

GameDialogue = connect(mapStateToProps, mapDispatchToProps())(GameDialogue)
export default GameDialogue

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
