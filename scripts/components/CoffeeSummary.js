/*eslint-disable no-unused-vars*/
import React, { Component, } from 'react';
/*eslint-enable no-unused-vars*/

class CoffeeSummary extends Component {
  render () {
    return (
      <div>
        <h2>brewRatio: {this.props.brewRatio}</h2>
        <h2>brewCoffeeWeight: {this.props.brewCoffeeWeight}</h2>
        <h2>brewWaterVolume: {this.props.brewWaterVolume}</h2>
        <h2>yieldVolumeRatio: {this.props.yieldVolumeRatio}</h2>
        <h2>yieldVolume: {this.props.yieldVolume}</h2>
        <h2>afterDilutionVolume: {this.props.afterDilutionVolume}</h2>
      </div>
    );
  }
}

export default CoffeeSummary;
