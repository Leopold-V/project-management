export const removeOneTask = (state, type, id) => {
  return state[type].filter((ele) => ele.id !== id);
};
