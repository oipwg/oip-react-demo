import React, { Component } from 'react'
import { connect } from 'react-redux';

// Import the Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import { AccountButton, LoginModal, VideoPlayer, ImageViewer, PaymentButton, CoinbaseWrapper } from 'oip-react'

import { loadActiveArtifact } from 'oip-state/src/actions/ActiveArtifact/thunks'
import { setActiveFile, fileToUID } from 'oip-state/src/actions/ActiveArtifactFiles/thunks'

class Homepage extends Component {
	constructor(props){
		super(props)

		this.fileSet = false

		this.fetchArtifact = this.fetchArtifact.bind(this);
	}
	fetchArtifact(){
		// CA: 21252c
		// Agent: fca1d6
		// Sintel: d48f83
		this.props.loadActiveArtifact("d48f83", (artifact) => {
			this.props.setActiveFile(artifact.getFiles()[1])
			this.fileSet = true
		})
	}
	componentDidMount(){
		this.fetchArtifact()
	}
	render(){
		let posterFile, title = "loading...", artifact_description, paid_file_uid, paid_file_state, lockVideo = false

		if (this.props.ActiveArtifact){
			posterFile = this.props.ActiveArtifact.getThumbnail()
			title = this.props.ActiveArtifact.getTitle()
			artifact_description = this.props.ActiveArtifact.getDescription()

			paid_file_uid = fileToUID(this.props.ActiveArtifact.getFiles()[0])

			if (this.props.ActiveArtifactFile && this.fileSet){
				if (this.props.ActiveArtifactFile.isPaid && !this.props.ActiveArtifactFile.owned && !this.props.ActiveArtifactFile.hasPaid)
					lockVideo = true
			}
		}
		
		return(
			<div className="container" style={{paddingTop: "20px"}}>
				{/* Add the Modals, they handle showing and hiding of themselves */}
				<LoginModal />
				<CoinbaseWrapper />

				<div className="row justify-content-end">
					<AccountButton className="float-right" style={{marginRight: "20px"}} />
				</div>

				<div className="row">
					<h1 className="mx-auto">{title}</h1>
				</div>

				<div className="row">
					<div className="col-12 col-md-8 col-lg-9">
						<VideoPlayer Artifact={this.props.ActiveArtifact} ArtifactFile={this.props.ActiveArtifactFile.ArtifactFile} lockFile={lockVideo} usePosterFile={false} />
					</div>
					<div className="col-md-4 col-lg-3 d-none d-md-block">
						<ImageViewer Artifact={this.props.ActiveArtifact} ArtifactFile={posterFile} />
					</div>
				</div>

				<br />
				
				<div className="row">
					<div className="card" style={{width: "100%", padding: "20px"}}>
						<div className="row">
							<div className="col-12 col-sm-6 col-md-8 col-lg-9">
								<h5 className="card-title">{title}</h5>
								<div className="card-subtitle">
									{artifact_description}
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
							{
								paid_file_state ?
									
								<div>
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
    setActiveFile
};

function mapStateToProps(state) {
	return {
        ActiveArtifact: state.ActiveArtifact.Artifact,
        ActiveArtifactFiles: state.ActiveArtifactFiles,
        ActiveArtifactFile: state.ActiveArtifactFiles.active ? state.ActiveArtifactFiles[state.ActiveArtifactFiles.active] : {ArtifactFile: undefined}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);