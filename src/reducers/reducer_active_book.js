// state argument is not Application state, only the state
// this reducer is responsible for

// if state is undefined , null is set to state.
export default function(state = null,action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;

  }

  return state;
}
