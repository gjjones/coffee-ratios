import {
  UPDATE_WEIGHT,
} from '../actions/actions';

const initialState = {
  brewRatio: 454 / 2000,
  brewCoffeeWeight: 0,
  brewWaterVolume: 0,
  yieldVolumeRatio: 935 / 2000,
  yieldVolume: 0,
  afterDilutionVolume: 0,
};

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_WEIGHT:
    let brewCoffeeWeight = action.value;
    let brewWaterVolume = brewCoffeeWeight / state.brewRatio;
    let yieldVolume = brewWaterVolume * state.yieldVolumeRatio;
    let afterDilutionVolume = yieldVolume * 3;
    return {
      ...state,
      brewCoffeeWeight,
      brewWaterVolume,
      yieldVolume,
      afterDilutionVolume,
    };
  default:
    return state;
  }
}
