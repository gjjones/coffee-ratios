export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';

export function updateWeight(value) {
  return {
    type: UPDATE_WEIGHT,
    value,
  };
}
