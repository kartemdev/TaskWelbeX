const routesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_ROUTES':
    return action.payload;
  default:
    return state;
  }
};

export default routesReducer;