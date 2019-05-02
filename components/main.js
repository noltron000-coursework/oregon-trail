// important items
import React, { Component } from 'react';
import { View } from 'react-native';
import {
	createStackNavigator, 
	createAppContainer,
} from 'react-navigation';

// get components
import TitleScreen from './title-screen.js';
import Game from './game.js';

// set up stack navigation
const MainNavigator = createStackNavigator({
	TitleScreen: { screen: TitleScreen }, // root of stack
	Game: { screen: Game }, // game stacks on title screen
},
{
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
});

const Main = createAppContainer(MainNavigator);

export default Main;
