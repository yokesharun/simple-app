export default function Reducer(state, action) {
    switch (action.type) {
      case "ADD_PERSON":
        return {
          ...state,
          persons: [...state.persons, action.payload],
        };
  
      case "EDIT_PERSON":
        const updatedPerson = action.payload;
  
        const updatedpersons = state.persons.map((person) => {
          if (person.id === updatedPerson.id) {
            return updatedPerson;
          }
          return person;
        });
  
        return {
          ...state,
          persons: updatedpersons,
        };
  
      default:
        return state;
    }
  };