import React, {Component} from 'react';
import AddNumber from "../components/AddNumber";

export default class AddNumberRoot extends Component {

  onClick = (size) => {
    this.props.onClick(size);
  }

  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        {/* <AddNumber onClick={this.onClick.bind(this)}></AddNumber> */}
        <AddNumber></AddNumber>
      </div>
    );
  }
}