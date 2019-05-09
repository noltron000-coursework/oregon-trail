// important items
import React, { Component } from 'react'
import { View, Button } from 'react-native'

// the primary object in the app
class GameButton extends Component {
	render() {
		return (
			<View>
				<Button
					title='Game Button'
					onPress={()=>{console.log('hello world')}}
					/>
			</View>
		)
	}
}

export default GameButton
