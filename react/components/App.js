import React, { Component } from 'react';
import Form from './Form';
import ItemContainer from './ItemContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allItems: []
    };
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(newItem) {
    this.setState({ allItems: [...this.state.allItems, newItem] });
  }

  render() {
    return(
      <div className="small-11 small-centered medium-10 medium-centered large-8 large-centered columns">
        <p className="app-text">Cost Per Use Calculator</p>
        <ItemContainer allItems={this.state.allItems} />
        <Form
          addNewItem={this.addNewItem}
          itemListLength={this.state.allItems.length}
        />
        <p className="app-text">A Project By Ruiz & Knott</p>
      </div>
    )
  }
}

export default App;
