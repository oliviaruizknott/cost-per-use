import React, { Component } from 'react';

class UsesDiv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div>
          <p>Uses</p>
          <div className="row">
            <button onClick={this.props.subtract} className="small-4 columns"> - </button>
            <h3 className="text-center small-4 columns">{this.props.uses}</h3>
            <button onClick={this.props.add} className="small-4 columns"> + </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UsesDiv;
