import 'babel-polyfill';

// Import items for React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Import stuff for Redux
import { Provider } from 'react-redux'
import { createStore } from 'oip-state'

// Import the App
import Homepage from './components/Homepage'
import ProviderWrapper from './components/ProviderWrapper'
import Movie from './components/Movie'
import Album from './components/Album'

// Import the Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore()

class App extends Component {
	render(){
		// Movie Artifacts
		// CA: 21252c
		// Agent: fca1d6
		// Sintel: d48f83

		// Album Artifacts
		// Cor Metallicum: 061951
		// Biddy Bums: b4e6c9
		// Angel: 8c204c
		return(
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Homepage} />
					<Route path="/movie" render={() => <ProviderWrapper component={Movie} id="d48f83" />} />
					<Route path="/free-movie" render={() => <ProviderWrapper component={Movie} id="fca1d6" />} />
					<Route path="/album" render={() => <ProviderWrapper component={Album} />} />
					<Route path="/free-album" render={() => <ProviderWrapper component={Album} id="061951" />} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

// export default App;