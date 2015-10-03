import React,{Component} from 'react';
import actions from './actions';

export default class RocketButton{
  clickButton(){
    actions.launchRocket();
  }

  render(){
    return <button
        onClick={this.clickButton}
        className="rocket-button">Launch Rocket</button>
  }
}
