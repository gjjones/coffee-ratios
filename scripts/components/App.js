/*eslint-disable no-unused-vars*/
import React, { Component, } from 'react';
/*eslint-enable no-unused-vars*/
import { connect, } from 'react-redux';
import { updateWeight, } from '../actions/actions';
import WeightInput from './WeightInput';
import CoffeeSummary from './CoffeeSummary';

class App extends Component {
  render () {
    return (
      <div>
        <h1>Cold Brew Ratios</h1>
        <h2>
          <WeightInput
            weight={this.props.brewCoffeeWeight}
            onChange={this.updateBrewCoffeeWeight.bind(this)}
          />
          g of coffee grounds
        </h2>
        <CoffeeSummary
          brewCoffeeParts={this.props.brewCoffeeParts}
          brewWaterParts={this.props.brewWaterParts}
          brewWaterVolume={this.props.brewWaterVolume}
          yieldConcentrateParts={this.props.yieldConcentrateParts}
          yieldWaterParts={this.props.yieldWaterParts}
          yieldVolume={this.props.yieldVolume}
          afterDilutionVolume={this.props.afterDilutionVolume}
        />
      </div>
    );
  }

  updateBrewCoffeeWeight (weight) {
    this.props.dispatch(updateWeight(weight));
  }
}

function mapStateToProps (state) {
  return {
    brewCoffeeParts: state.brewCoffeeParts,
    brewWaterParts: state.brewWaterParts,
    brewCoffeeWeight: state.brewCoffeeWeight,
    brewWaterVolume: state.brewWaterVolume,
    yieldConcentrateParts: state.yieldConcentrateParts,
    yieldWaterParts: state.yieldWaterParts,
    yieldVolume: state.yieldVolume,
    afterDilutionVolume: state.afterDilutionVolume,
  };
}

export default connect(mapStateToProps)(App);
