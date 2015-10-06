import React,{Component} from 'react';
import RocketButton from './RocketButton';
import Display from './Display';
import {Stage, TilingSprite, Text} from 'react-pixi';

class PixiExample {
  static displayName = 'ExampleStage';

  render(){
    var fontstyle = {font:'40px Helvetica'};
    return <Stage width={window.innerWidth} height={window.innerHeight}>
      <Text text="Rocket" x={this.props.xposition} y={this.props.xposition} style={fontstyle} anchor={new PIXI.Point(0.5,0)} key="2" />
    </Stage>;
  }
}

React.render(<div className="center-content">
  <Display/>
  <RocketButton/>
</div>, document.getElementById('root'));
