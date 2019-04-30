import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Button
} from 'react-native';

export default class TitleScreen extends Component {
	render() {
		return (
			<View>
				<Text>Oregon Trail</Text>
				<Button
					title='New Game'
					onPress={()=>{console.log('hello')}}
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
