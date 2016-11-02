import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
//      return state.concat([ action.payload.data ]);
      return [action.payload.data, ...state]; //ES6 way to write the above code
      //this creates an entire new array to prevent state mutation
  }
  return state;
}
