import React from 'react';
import classNames from 'classNames';
import Action from '../../../actions/appActions';
import AppConstants from '../../../constants/appConstants';

class InfoBoard extends React.Component{
	constructor(){
		super();
		this.state = {
			pageName : ''
		}		
	}
	
	render(){
		return(
				<div className="col-lg-3 col-xsm-6">
					<div className="panel small-box-icon">
	                <span className = {this.props.data.color} style={{fontSize:"1.3em"}}>
	                	{this.props.data.infoName}
	                </span>
			            <div className="box-info">
			                <p className="size-h2">25</p>
			                <p className="text-muted">{this.props.data.infoName}</p>
			            </div>			            
			            <div className="panel-body">
			            	<button className="btn btn-primary"
			            		 onClick={Action.SWITCH_PAGE.bind(null, {
			            		 	page:this.props.data.page, 
			            		 	pageName:this.props.data.pageName
			            		 })}>
			            		<i className="fa fa-plus"></i>
			            	</button>                            
			            </div>
			        </div>			        
		        </div>
			)
	}
}


class DashBoardInfo extends React.Component{
	constructor(){
		super();
		this.state = {
			infoBoardCount: [{
				index: 1, 
				infoName: 'Categories',
				color: ' box-icon bg-success',
				buttonColor: '#EC5B3F',
				pageName: 'category',
				page: AppConstants.CATEGORY_PAGE
			},
			{
				index: 2, 
				infoName: 'Channels',
				color: 'box-icon bg-info',
				buttonColor: '#619BF2',
				pageName: 'channel',
				page: AppConstants.CHANNEL_PAGE
			},
			{
				index: 3, 
				infoName: 'Local Channels',
				color: 'box-icon bg-warning',
				buttonColor: '#F2B53F',
				pageName: 'channel',
				page: AppConstants.CHANNEL_PAGE
			},
			{
				index: 4, 
				infoName: 'Something',
				color: 'box-icon bg-danger',
				buttonColor: '#AA3D2A',
				pageName: 'something'
			}]			
		}
	}
	render(){
		return(		
				<div className="row">					
					{this.state.infoBoardCount.map((obj, index) => {
						return <InfoBoard key={index} data={obj}/>
					})}
				</div>
			)
	}
}


export default DashBoardInfo;