import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      originalCost: '',
      error: 'hide-warning'
    };
    this.handleNameEntry = this.handleNameEntry.bind(this);
    this.handleCostEntry = this.handleCostEntry.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameEntry(event) {
    this.setState({ name: event.target.value });
  }

  handleCostEntry(event) {
    this.setState({ originalCost: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.originalCost !== '' && this.state.originalCost >= 0) {
      let newItemData = {
        id: this.props.itemListLength + 1,
        name: this.state.name,
        originalCost: parseInt(this.state.originalCost)
      };
      this.props.addNewItem(newItemData);
      this.setState({
        name: '',
        originalCost: '',
        error: 'hide-warning'
      });
    } else {
      this.setState({ error: 'show-warning' });
    }
  }

  render() {
    return(
      <div className="form-tile callout">
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label className="small-centered">Item Name:
              <input
                name='name'
                type='text'
                placeholder='Launchpad'
                className='text-field'
                value={this.state.name}
                onChange={this.handleNameEntry}
              />
            </label>
            <br/>
            <label className="small-centered">Original Cost:
              <input
                name='cost'
                type='number'
                placeholder='200'
                className='text-field'
                value={this.state.originalCost}
                onChange={this.handleCostEntry}
              />
            </label>
            <br/>
            <p className={this.state.error}>Please fill in all text fields. (Original Cost must be positive.)</p>
            <input type='submit' value='Create Item' className="submit-button"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;

// pattern='[0-9]*'
