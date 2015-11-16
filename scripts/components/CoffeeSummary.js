/*eslint-disable no-unused-vars*/
import React, { Component, } from 'react';
/*eslint-enable no-unused-vars*/

class CoffeeSummary extends Component {
  render () {
    let brewWaterVolume = Math.ceil(this.props.brewWaterVolume),
      yieldVolume = Math.ceil(this.props.yieldVolume),
      afterDilutionVolume = Math.ceil(this.props.afterDilutionVolume);
    return (
      <div>
        <p>at {this.props.brewCoffeeParts}:{this.props.brewWaterParts} coffee to water</p>
        <p>will need {brewWaterVolume}ml of water</p>
        <p>should yield {yieldVolume}ml of concentrate</p>
        <p>which diluted at {this.props.yieldConcentrateParts}:{this.props.yieldWaterParts} concetrate to water</p>
        <p>should yield {afterDilutionVolume} ml ready-to-drink cold brew</p>
      </div>
    );
  }
}

export default CoffeeSummary;
