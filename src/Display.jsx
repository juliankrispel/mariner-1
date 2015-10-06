import React, {Component} from 'react';
import store from './store';

export default class DisplayComponent extends Component{
  static displayName = 'Display';

  constructor(props){
    super(props)
    this.state = {
      messages: []
    };
  }


  componentDidMount(){
    store.on('display', (data)=>{
      this.state.messages.push(data)
      this.setState({messages: this.state.messages});
      setTimeout(()=>{
        this.state.messages.pop();
      }, 4000);
    })
  }

  renderMessages(){
    return this.state.messages.map((msg)=>{
      return <div>{msg}</div>
    });
  }

  render(){
    if(this.state.messages.length > 0){
      return <div>{this.renderMessages()}</div>;
    }else{
      return null;
    }
  }
}
