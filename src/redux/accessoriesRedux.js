
//selectors
export const getGiftAccessoryByKickscooter = ({ accessories }, gift) => accessories
  .find(accessory => accessory.title === gift);
  export const getAllAccessories = state => state.accessories; 

// action name creator
const createActionName = actionName => `app/accessories/${actionName}`;


// action types 

// action creators

// reducer
const accessoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default accessoriesReducer;