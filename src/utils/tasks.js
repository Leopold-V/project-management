export const removeTaskById = (state, type, id) => {
  return state[type].filter((ele) => ele.id !== id);
};

export const calculPosition = (state, dest_id, destination_index) => {
  if (destination_index === 0) {
    if (state[dest_id][destination_index]) {
      return state[dest_id][destination_index].position / 2;
    }
    return 1000;
  }
  if (destination_index === state[dest_id].length - 1 || destination_index === state[dest_id].length) {
    return state[dest_id][state[dest_id].length - 1].position + 1000;
  }
  return (state[dest_id][destination_index - 1].position + state[dest_id][destination_index + 1].position) / 2;
};
