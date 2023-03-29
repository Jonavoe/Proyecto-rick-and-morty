import {
  ADD_CHARACTERS,
  FILTER_CARDS,
  ORDER_CARDS,
  REMOVE_CHARACTERS,
} from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  const charId = action.payload ? action.payload.id : null;
  const charAlreadyInFavorites = state.myFavorites.find(
    char => char.id === charId
  );
  const charAlreadyInAllCharacters = state.allCharacters.find(
    char => char.id === charId
  );

  if (charAlreadyInFavorites && charAlreadyInAllCharacters) {
    return state;
  } else {
    switch (action.type) {
      case ADD_CHARACTERS:
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],
        };

      case REMOVE_CHARACTERS:
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            char => char.id !== action.payload
          ),
        };

      case FILTER_CARDS:
        if (action.payload !== 'All') {
          const filter = state.allCharacters.filter(
            char => char.gender === action.payload
          );
          return {
            ...state,
            myFavorites: filter,
          };
        } else {
          return { ...state, myFavorites: state.allCharacters };
        }

      case ORDER_CARDS:
        const order = [...state.myFavorites];
        if (action.payload === 'Ascendente') {
          order.sort((char1, char2) => char1.id - char2.id);
        } else {
          order.sort((char1, char2) => char2.id - char1.id);
        }
        return { ...state, myFavorites: order };
      default:
        return { ...state };
    }
  }
};

export default rootReducer;
