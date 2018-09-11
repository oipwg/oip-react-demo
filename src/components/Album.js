import React, { Component } from 'react'
import { connect } from 'react-redux';

import Linkify from 'react-linkify'

import { AccountButton, LoginModal, AudioViewer, FilePlaylist, CoinbaseWrapper, ArtifactTitle, ArtifactArtist } from 'oip-react'
import { loadActiveArtifact, setActiveFile, fileToUID } from 'oip-state'

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
		this.props.loadActiveArtifact(this.props.id || "061951")
	}
	componentDidMount(){
		this.fetchArtifact()
	}
	render(){
		return(
			<div className="container" style={{maxWidth: "1200px"}}>
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
					<div className="col-12">
						<AudioViewer />
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
	loadActiveArtifact,
	setActiveFile
}

export default connect(undefined, mapDispatchToProps)(Album);