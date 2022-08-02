// Actions
const ADD_CNT = "react-lab/counter/ADD_CNT";
const SUB_CNT = "react-lab/counter/SUB_CNT";

// ActionCreators
export function addCounter(payload) {
  return {
    type: ADD_CNT,
    payload,
  };
}

export function subCounter(payload) {
  return {
    type: SUB_CNT,
    payload,
  };
}

// initialState
const initialState = {
  count: 0,
  name: "",
};

// reducers
export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_CNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case SUB_CNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}
