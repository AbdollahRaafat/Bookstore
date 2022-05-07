const CHECK_STATUS = './library/categories/CHECK_STATUS';

const stateInit = {
  type: 'action',
  checked: true,
  payload: 'Under construction',
};

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const catReducer = (state = stateInit, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;

    default:
      return state;
  }
};

export default catReducer;
