import React, { Component } from 'react'
import { connect } from 'react-redux';

import Linkify from 'react-linkify'

import { AccountButton, LoginModal, FilePaymentWrapper, PosterWrapper, PaymentButton, CoinbaseWrapper, ArtifactTitle, ArtifactDescription } from 'oip-react'

import { loadActiveArtifact, setActiveArtifact, setActiveFile, fileToUID } from 'oip-state'

class Movie extends Component {
	constructor(props){
		super(props)

		this.fileSet = false

		this.fetchArtifact = this.fetchArtifact.bind(this);
	}
	fetchArtifact(){
		// CA: 21252c
		// paid Agent: fca1d6
		// free Agent: 5533ce
		// Sintel: d48f83
		let success_callback = (artifact) => {
			console.log(JSON.stringify(artifact.toJSON()))
			if (this.props.trailerFile)
				this.props.setActiveFile(artifact.getFiles()[this.props.trailerFile])

			this.fileSet = true
		}

		if (this.props.artifact){
			this.props.setActiveArtifact(this.props.artifact, success_callback)
		} else {
			this.props.loadActiveArtifact(this.props.id || "d48f83", success_callback)
		}
	}
	componentDidMount(){
		this.fetchArtifact()
	}
	render(){
		let artifact_description, paid_file_uid

		if (this.props.ActiveArtifact){
			artifact_description = this.props.ActiveArtifact.getDescription()


			// ------------------------------------------
			// ------------------------------------------
			// This is to fix the Unicode broken publishes, only temporary code.
			try {
				let fixed_desc = JSON.parse(artifact_description)
				artifact_description = fixed_desc
			} catch (e) { }
			// ------------------------------------------
			// ------------------------------------------


			let paid_file_num = 1
			
			if (this.props.mainFile !== undefined)
				paid_file_num = this.props.mainFile

			paid_file_uid = fileToUID(this.props.ActiveArtifact.getFiles()[paid_file_num])
		}
		
		return(
			<div className="container" style={{maxWidth: "1200px", padding: "20px"}}>
				{/* Add the Modals, they handle showing and hiding of themselves */}
				<LoginModal />
				<CoinbaseWrapper />

				<div className="row justify-content-end">
					<AccountButton className="float-right" style={{marginRight: "20px"}} />
				</div>

				<div className="row">
					<h1 className="mx-auto" style={{textAlign: "center"}}><ArtifactTitle /></h1>
				</div>

				<div className="row">
					<div className="col-12 col-md-9 col-lg-9">
						<FilePaymentWrapper options={{usePosterFile: false}} />
					</div>
					<div className="col-md-3 col-lg-3 d-none d-md-block">
						<PosterWrapper />
					</div>
				</div>

				<br />
				
				<div className="row">
					<div className="card" style={{width: "100%", padding: "20px"}}>
						<div className="row">
							<div className="col-12 col-md-8 col-lg-9 order-last order-md-first mt-15">
								<h5 className="card-title"><ArtifactTitle /></h5>
								<div className="card-subtitle" style={{whiteSpace: "pre-wrap"}}>
									<Linkify>{artifact_description}</Linkify>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3 order-first order-md-last">
							{
								this.props.ActiveArtifactFiles[paid_file_uid] ?
									
								<div className="mx-auto" style={{width: "fit-content"}}>
									<PaymentButton type="view" ArtifactFile={this.props.ActiveArtifactFiles[paid_file_uid].ArtifactFile} />
									<PaymentButton type="buy" ArtifactFile={this.props.ActiveArtifactFiles[paid_file_uid].ArtifactFile} />
								</div>

								: null
							}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = {
    loadActiveArtifact,
    setActiveFile,
    setActiveArtifact
};

function mapStateToProps(state) {
	return {
        ActiveArtifact: state.ActiveArtifact.Artifact,
        ActiveArtifactFiles: state.ActiveArtifactFiles,
        ActiveArtifactFile: state.ActiveArtifactFiles.active ? state.ActiveArtifactFiles[state.ActiveArtifactFiles.active] : {ArtifactFile: undefined}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);