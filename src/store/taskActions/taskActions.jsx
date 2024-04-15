export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK'; 


export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    text,
    id: Math.random().toString(36).substring(2, 9) 
  }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});
