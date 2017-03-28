import React, { Component } from 'react';
import ItemTile from './ItemTile';

class ItemContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    let itemList = this.props.allItems.map((item) => {
      return(
        <ItemTile
          key={item.id}
          id={item.id}
          name={item.name}
          originalCost={item.originalCost}
        />
      );
    })

    return(
      <div className="item-container">
        {itemList}
      </div>
    )
  }
}

export default ItemContainer;
