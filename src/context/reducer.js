const reducer = (action, obj, state, setState) => {
  //TODO complete the reducer
  switch (action) {
    case 'add':
      setState(obj);
      break;
    case 'edit':
      break;
    case 'delete':
      break;

    default:
      break;
  }
};

export default reducer;
