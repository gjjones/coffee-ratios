import {
  UPDATE_WEIGHT,
} from '../actions/actions';

const initialState = {
  brewCoffeeParts: 454,
  brewWaterParts: 2000,
  brewCoffeeWeight: 0,
  brewWaterVolume: 0,
  yieldConcentrateParts: 935,
  yieldWaterParts: 2000,
  yieldVolume: 0,
  afterDilutionVolume: 0,
};

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_WEIGHT:
    let brewCoffeeWeight = action.value;
    let brewWaterVolume = brewCoffeeWeight /
                          (state.brewCoffeeParts / state.brewWaterParts);
    let yieldVolume = brewWaterVolume *
                        (state.yieldConcentrateParts / state.yieldWaterParts);
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
