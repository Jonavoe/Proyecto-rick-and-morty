const initialState = {
  myFavorites: [],
};

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const REMOVE_CHARACTERS = 'REMOVE_CHARACTERS';

export const addCharacters = (data) => {
  return {
    type: ADD_CHARACTERS,
    payload: data
  };
};

export const removeCharacters = (id) => {
  return {
    type: REMOVE_CHARACTERS,
    payload: id
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };
    case REMOVE_CHARACTERS:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(char => char.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
