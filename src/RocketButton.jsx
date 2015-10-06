import React,{Component} from 'react';
import {launchRocket, steerRight, steerLeft} from './actions';

export default class RocketButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(launchRocket)
    return <div>
      <button
        onClick={launchRocket}
        className="rocket-button">Launch</button>
      <button
        onClick={steerRight}
        className="rocket-button">Right</button>
      <button
        onClick={steerLeft}
        className="rocket-button">Left</button>
    </div>;
  }
}
