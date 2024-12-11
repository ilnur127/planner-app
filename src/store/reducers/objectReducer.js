const initialState = {
  selectedObjects: [], // Для хранения добавленных объектов
};

const objectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OBJECT":
      return {
        ...state,
        selectedObjects: [...state.selectedObjects, action.payload],
      };
    case "REMOVE_OBJECT":
      return {
        ...state,
        selectedObjects: state.selectedObjects.filter(
          (obj) => obj.id !== action.payload
        ),
      };
    case "UPDATE_OBJECT_POSITION":
      return {
        ...state,
        selectedObjects: state.selectedObjects.map((obj) =>
          obj.id === action.payload.id
            ? { ...obj, position: action.payload.position }
            : obj
        ),
      };
    case "UPDATE_OBJECT_SIZE":
      return {
        ...state,
        selectedObjects: state.selectedObjects.map((obj) =>
          obj.id === action.payload.id
            ? { ...obj, size: action.payload.size }
            : obj
        ),
      };
    case "LOAD_LAYOUT":
      return {
        ...state,
        selectedObjects: action.payload,
      };
    default:
      return state;
  }
};

export default objectReducer;
