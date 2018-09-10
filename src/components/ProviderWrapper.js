import 'babel-polyfill';

// Import items for React
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// Import stuff for Redux
import { Provider } from 'react-redux'
import { createStore } from 'oip-state'

const store = createStore()

class ProviderWrapper extends Component {
	render(){
		let myChild = React.createElement(this.props.component, {...this.props})
		
		return(
			<Provider store={store}>
				{myChild}
			</Provider>
		)
	}
}

export default ProviderWrapper;