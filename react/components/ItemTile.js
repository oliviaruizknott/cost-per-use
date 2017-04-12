import React, { Component } from 'react';
import Name from './Name';
import OriginalCost from './OriginalCost';
import UsesDiv from './UsesDiv';
import CostPerUse from './CostPerUse';

class ItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uses: 1,
      costPerUse: this.props.originalCost
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    let newUses = this.state.uses + 1;
    let newCostPerUse = this.props.originalCost/newUses;
    this.setState({ costPerUse: newCostPerUse });
    this.setState({ uses: newUses });
  }

  subtract(event) {
    let newUses = this.state.uses - 1;
    if (newUses > 0) {
      let newCostPerUse = this.props.originalCost/newUses;
      this.setState({ costPerUse: newCostPerUse });
      this.setState({ uses: newUses });
    }
  }

  render() {
    return(
      <div className="small-6 columns end">
        <div className="item-tile callout text-center">
          <Name name={this.props.name} />
          <OriginalCost originalCost={this.props.originalCost} />
          <hr />
          <UsesDiv uses={this.state.uses} add={this.add} subtract={this.subtract} />
          <hr />
          <CostPerUse costPerUse={this.state.costPerUse} />
        </div>
      </div>
    )
  }
}

export default ItemTile;
