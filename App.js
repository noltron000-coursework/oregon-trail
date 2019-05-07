import React, { Component } from 'react';
import Main from './components/main.js'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index.js'

const store = createStore(reducers)

export default class TitleScreen extends Component {
	render() {
		return (
			<Provider store={ store }>
				<Main/>
			</Provider>
		)
	}
}
