import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Button,
	StyleSheet,
} from 'react-native';

class TitleScreen extends Component {
	render() {
		const { navigation } = this.props
		const { navigate } = navigation
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Oregon Trail</Text>
				<View style={styles.buttonView}>
					<Button
						title='New Game'
						onPress={()=>{navigate('Game')}}
					/>
				</View>
				<View style={styles.buttonView}>
					<Button
						title='Settings'
						onPress={()=>{console.log('')}}
					/>
				</View>
				<View style={styles.buttonView}>
					<Button
						title='Exit'
						onPress={()=>{console.log('goodbye')}}
					/>
				</View>
			</View>
		)
	}
}

export default TitleScreen

// TODO: move to external stylesheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonView: {
		marginTop: 10,
		width: 200,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
