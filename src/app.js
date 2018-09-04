import 'babel-polyfill';

// Import items for React
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// Import stuff for Redux
import { Provider } from 'react-redux'
import { createStore } from 'oip-state'

// Import the App
import Homepage from './components/Homepage'

const store = createStore()

class App extends Component {
	render(){
		return(
			<Provider store={store}>
				<Homepage />
			</Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;