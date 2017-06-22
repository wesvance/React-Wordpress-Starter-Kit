import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/styles/components/about/AboutPage.scss';
import * as uiActions from '../../actions/uiActions';

import MailingList from '../common/MailingList';
import HorizontalSocialButtons from '../common/HorizontalSocialButtons';

import Apollo from '../../assets/images/logos/apollo.png';
import FreelanceAfternoon from '../../assets/images/logos/freelanceafternoon.png';
import Launch from '../../assets/images/logos/launch.png';
import SonyAlpha from '../../assets/images/logos/sonyalpha.png';
import TechBreakfast from '../../assets/images/logos/techbreakfast.png';
import TechTrivia from '../../assets/images/logos/techtrivia.png';
import ClientPortal from '../../assets/images/logos/clientportal.png';

class AboutPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render(){
    return(
      <div id="AboutPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="">
                <h1>About Page</h1>
                <h3>This tempalte is designed to help developers, who are familure with React, build their own frontend for Wordpress sites without developing in the Wordpress environment!</h3>
                <h4>
                  As it is a tempalte, it includes the bare minimum
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <HorizontalSocialButtons
            githubLink={'https://github.com/wesvance/React-Wordpress-Starter-Kit'}
            emailLink={'mailto:me@wesvance.com?Subject=I Have a Question about your React + Wordpress template!'}/>
        </div>

        <div className="container">
          <div className="activeTopics">
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <h3>Bundled Technologies</h3>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-3 imgContainer">
                <a href="http://apollostu.com" target='_blank'>
                  <img src={Apollo} alt="Apollo Studios" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <p>
                  React is a modern... xyz
                </p>
                <ul>
                  <li>React v</li>
                  <li>React Router</li>
                </ul>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <p>
                Node (Express) server that hosts an API so we can make calls to and from Wordpress & Mailchimp
                </p>
              </div>
              <div className="col-12 col-lg-3 imgContainer">
                <img src={Launch} alt="Launch Book" className="img-responsive tabletHide"/>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-3 imgContainer">
                <a href="http://freelanceafternoon.com" target='_blank'>
                  <img src={FreelanceAfternoon} alt="Freelance Afternoon Show" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <p>Redux! State management</p>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <p>Wordpress</p>
              </div>
              <div className="col-12 col-lg-3 imgContainer">
                <a href="https://www.meetup.com/Triangle-tech-trivia" target='_blank'>
                  <img src={TechTrivia} alt="Triangle Tech Trivia" className="img-responsive tabletHide"/>
                </a>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-3 imgContainer">
                <a href="http://freelanceafternoon.com" target='_blank'>
                  <img src={FreelanceAfternoon} alt="Freelance Afternoon Show" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <p>Mailchimp</p>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <p>R</p>
              </div>
              <div className="col-12 col-lg-3 imgContainer">
                <a href="https://www.meetup.com/Triangle-tech-trivia" target='_blank'>
                  <img src={TechTrivia} alt="Triangle Tech Trivia" className="img-responsive tabletHide"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10">
              <MailingList
                body={"React + Wordpress Starter kit is bundled with Mailchimp's API to manage your mailing list!"}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

