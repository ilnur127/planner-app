export const addObject = (object) => ({
  type: "ADD_OBJECT",
  payload: object,
});

export const removeObject = (id) => ({
  type: "REMOVE_OBJECT",
  payload: id,
});

export const updateObjectPosition = (id, position) => ({
  type: "UPDATE_OBJECT_POSITION",
  payload: { id, position },
});
export const updateObjectSize = (id, size) => ({
  type: "UPDATE_OBJECT_SIZE",
  payload: { id, size },
});

export const loadLayout = (layout) => ({
  type: "LOAD_LAYOUT",
  payload: layout,
});
