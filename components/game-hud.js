// important items
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// the primary object in the app
class GameHUD extends Component {
	render() {
		return (
			<View>
				<Text>Game Hud</Text>
				<Text>days: {this.props.days}</Text>
				<Text>food: {this.props.food}</Text>
				<Text>gold: {this.props.gold}</Text>
			</View>
		)
	}
}

export default GameHUD
