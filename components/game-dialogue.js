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
						<Text>You found a food store. Do you want to buy something?</Text>
						<View style={styles.buttonView}>
							<Button
								title='Buy Food'
								onPress={ () => {
									this.props.setOut()
									this.props.hideModal()
								}}
							/>
						</View>

						<View style={styles.buttonView}>
							<Button
								title='Hide Modal'
								onPress={ () => {
									this.props.setOut()
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
		showModal,
		hideModal,
		checkGameOver,
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(GameDialogue)

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
