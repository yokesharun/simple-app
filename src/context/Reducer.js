export default function Reducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };

    case "EDIT_PERSON":
      const data = action.payload;

      const updatedData = state.persons.map((person) => {
        if (person.id === data.id) {
          return data;
        }
        return person;
      });

      return {
        ...state,
        persons: updatedData,
      };

    default:
      return state;
  }
}
