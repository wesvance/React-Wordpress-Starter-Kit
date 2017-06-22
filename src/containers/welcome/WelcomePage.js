import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/styles/components/welcome/WelcomePage.scss';
import * as uiActions from '../../actions/uiActions';

import MailingList from '../common/MailingList';

class WelcomePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render(){
    return(
      <div id="WelcomePage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="welcomeTitle">
                    <h1>React + Wordpress Starter Kit</h1>
                    <h3>This template will allow you to build your own websites using Wordpress as a backend.</h3>
                  </div>
                </div>
              </div>
              <div className="row">
              </div>
              <div className="row">
                <div className="col-10">
                  <MailingList
                    body={"React + Wordpress Starter kit is bundled with Mailchimp's API to manage your mailing list!"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch){
  return{
    ui_actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

