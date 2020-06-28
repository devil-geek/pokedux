const dummy = (state = "dummy", action) => {
  if (action === "DUMMY") {
    return action.payload;
  }
  return state;
};

export default dummy;
