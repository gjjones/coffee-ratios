/*eslint-disable no-unused-vars*/
import React, { Component, } from 'react';
/*eslint-enable no-unused-vars*/

class WeightInput extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: props.weight, };
  }

  render () {
    return (
      <div>
        <input
          type="number"
          value={this.state.weight}
          onChange={this.updateWeight.bind(this)}
        />
        <button onClick={this.applyWeight.bind(this)}>Set Weight</button>
      </div>
    );
  }

  updateWeight (e) {
    this.setState({ weight: e.target.value, });
  }

  applyWeight () {
    this.props.onUpdateWeight(this.state.weight);
  }
}
WeightInput.defaultProps = { weight: 0, };

export default WeightInput;
