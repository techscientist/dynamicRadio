import React from 'react';
import Action from '../../../actions/appActions';
import AppStore from '../../../stores/appStore';
import AppConstants from '../../../constants/appConstants';

import DashBoardInfo from './dasboardInfo';
import CategoryPage from './categoryPage';

class AddChannelUniPage extends React.Component{
	constructor(){
		super();
		this.state = {
			pageEnabled: false,
			page: ''
		}
		this._onChange = this._onChange.bind(this);
	}	
	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange(){
		this.setState(AppStore.CheckActivePage());	
	}
	CurrentPage(){		
		if(this.state.pageEnabled){
			console.log("page value: ", this.state.page);
			switch(this.state.page){
				case AppConstants.CATEGORY_PAGE:
					this.setState({page: <CategoryPage />})
				break;
				case AppConstants.CHANNEL_PAGE:
				break;
				case AppConstants.USER_PAGE:
				break;			
				case AppConstants.MISC_PAGE:
				break;				
			}
		}		
	}
	render(){
		return(
				<div>{this.state.pageEnabled 
					?
						<section className="panel panel-default">
					        <div className="panel-heading"><i className="fa fa-list panel-ico"></i>{this.state.currentPage}</div>
					        <div className="panel-body ng-scope" data-ng-controller="NotifyCtrl">

					            <div className="callout-elem callout-elem-warning text-center">
					                <h4>callout-elem heading</h4>
					                <p>Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text. Assumenda, alias, in accusantium totam adipisci vel et suscipit quidem libero pariatur minus ratione quo doloremque error at nemo incidunt dicta quia?</p>
					            </div>	
					            
					            {this.state.page}
					        </div>
					    </section>
					:
						null}
			 	</div>
			)
	}
}

class AddChannelPage extends React.Component{

	render(){
		return(	
			<section id="content" className="animate-fade-up">
				<div className="page ng-scope">
					<DashBoardInfo />
					<AddChannelUniPage />			            	
				</div>
			</section>
			)
	}
}


export default AddChannelPage;