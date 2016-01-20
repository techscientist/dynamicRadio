import React from 'react';

class CategoryPage extends React.Component{
	constructor(){
		super();

		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleTextChange(e){
		console.log(e.target.value);
	}
	render(){
		return(				
				<div className="row">					            	
	            	<div className="col-xs-8 col-md-8">
	            		<fieldset>					
							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon">
		                                <span className="fa fa-pencil"></span>
		                            </span>
									<input type='text' placeholder='Category Group Name' className="form-control"
										onChange={this.handleTextChange}/>
								</div>
							</div>

							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon">
		                                <span className="fa fa-pencil"></span>
		                            </span>
									<input type='text' placeholder='Category Display Name' className="form-control"/>
								</div>
							</div>
							
							<div className="form-group pull-right">
								<button className="btn btn-default"
									onClick={this.handleSave}>Save</button>
							</div>
						</fieldset>
	            	</div>
	            	<div className="col-xs-4 col-md-4">
	            		<div className="row">
	            			<div className="callout-elem callout-elem-success" style={{paddingTop:'0px', marginTop:'0px'}}>
		            			<h4 className="text-center">Categories</h4>
				                <p className="ng-binding">The selected page no: 4</p>								                
			            	</div>
	            		</div>					            		
	            	</div>
	            </div>
			)
	}
}


export default CategoryPage;