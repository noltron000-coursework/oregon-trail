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
				<Text>Oregon Trail</Text>
				<Button
					title='New Game'
					onPress={()=>{navigate('Game')}}
				/>
				<Button
					title='Settings'
					onPress={()=>{console.log('')}}
				/>
				<Button
					title='Exit'
					onPress={()=>{console.log('goodbye')}}
				/>
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
	}
});
