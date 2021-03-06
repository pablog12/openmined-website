import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotification } from '../../../../../modules/notifications';
import {
  getContent,
  getGithubProjects,
  getGithubMembers
} from '../../../../../modules/homepage';

import Hero from './hero';
import Mission from './mission';
import Process from './process';
import Timeline from './timeline';
import Footer from './footer';

import './homepage.css';

class Homepage extends Component {
  componentDidMount() {
    this.props.getContent();
    this.props.getGithubProjects();
    this.props.getGithubMembers();
  }

  render() {
    const { hero, mission, process, timeline, footer } = this.props.content;

    return (
      <div id="homepage">
        <Hero addNotification={this.props.addNotification} content={hero} />
        <Mission content={mission} />
        <Process content={process} />
        <Timeline content={timeline} />
        <Footer content={footer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addNotification, getContent, getGithubProjects, getGithubMembers },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
