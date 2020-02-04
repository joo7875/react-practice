import React, {Component} from 'react';
import store from '../store';

export default class AddNumber extends Component {
	state = {size:1}

	onChange = (e) => {
		this.setState({size: Number(e.target.value)});
	}
	onClick = (e) => {
    // this.props.onClick(this.state.size);
    store.dispatch({type:'INCREMENT',  size:this.state.size});
	}
  
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type='button' value='+' onClick={this.onClick.bind(this)}></input>
        <input type='text' value={this.state.size} onChange={this.onChange.bind(this)}></input>
      </div>
    )
  }
}