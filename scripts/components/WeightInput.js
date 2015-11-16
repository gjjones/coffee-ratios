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
      <input
        className="grounds-weight"
        type="number"
        placeholder="####"
        value={this.state.weight}
        onChange={this.updateWeight.bind(this)}
      />
    );
  }

  updateWeight (e) {
    this.setState({ weight: e.target.value, });
    this.props.onChange(e.target.value || 0);
  }
}
WeightInput.defaultProps = { weight: '', };

export default WeightInput;
