import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TitleScreen from './title-screen.js';
import Game from './game.js'

export default class Main extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TitleScreen/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
