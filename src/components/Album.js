import React, { Component } from 'react'
import { connect } from 'react-redux';

import Linkify from 'react-linkify'

import { AccountButton, LoginModal, FilePaymentWrapper, FilePlaylist, CoinbaseWrapper, ArtifactTitle, ArtifactArtist } from 'oip-react'
import { setActiveArtifact, loadActiveArtifact } from 'oip-state'

import { TheBiddyBums } from '../assets/test_artifacts.js'

class Album extends React.Component {
	constructor(props){
		super(props)

		this.fileSet = false

		this.fetchArtifact = this.fetchArtifact.bind(this);
	}
	fetchArtifact(){
		// Cor Metallicum: 061951
		// Biddy Bums: b4e6c9
		// Angel: 8c204c
		if (this.props.id){
			this.props.loadActiveArtifact(this.props.id)
		} else {
			this.props.setActiveArtifact(TheBiddyBums)
		}
	}
	componentDidMount(){
		this.fetchArtifact()
	}
	render(){
		return(
			<div className="container" style={{maxWidth: "1200px", marginTop: "20px"}}>
				{/* LoginModal is used to provide a way for the user to Login */}
				<LoginModal />
				{/* CoinbaseWrapper is used to provide a way for the user to purchase extra funds from Coinbase */}
				<CoinbaseWrapper />

				{/* The AccountButton is used to provide a way for the User */}
				<div className="row justify-content-end">
					<AccountButton className="float-right" style={{marginRight: "20px"}} />
				</div>

				<div className="row">
					<h1 className="mx-auto" style={{textAlign: "center"}}>
						<ArtifactTitle/>
					</h1>
				</div>
				<div className="row">
					<h3 className="mx-auto">
						By: <ArtifactArtist/>
					</h3>
				</div>

				<div className="row">
					<div className="col-12" style={{height: "400px", maxHeight: "400px"}}>
						<FilePaymentWrapper />
					</div>
				</div>

				<div className="row" style={{paddingTop: "25px", maxHeight: "400px"}}>
					<div className="col-12">
						<FilePlaylist />
					</div>
				</div>
			</div>
		)
	}
}

var mapDispatchToProps = {
	setActiveArtifact,
	loadActiveArtifact
}

export default connect(undefined, mapDispatchToProps)(Album);