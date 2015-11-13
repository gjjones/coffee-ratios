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
        <h1>Coffee Ratios</h1>
        <WeightInput
          weight={this.props.brewCoffeeWeight}
          onUpdateWeight={this.updateBrewCoffeeWeight.bind(this)}
        />
        <CoffeeSummary
          brewRatio={this.props.brewRatio}
          brewCoffeeWeight={this.props.brewCoffeeWeight}
          brewWaterVolume={this.props.brewWaterVolume}
          yieldVolumeRatio={this.props.yieldVolumeRatio}
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
    brewRatio: state.brewRatio,
    brewCoffeeWeight: state.brewCoffeeWeight,
    brewWaterVolume: state.brewWaterVolume,
    yieldVolumeRatio: state.yieldVolumeRatio,
    yieldVolume: state.yieldVolume,
    afterDilutionVolume: state.afterDilutionVolume,
  };
}

export default connect(mapStateToProps)(App);
