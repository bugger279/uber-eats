let initialState = {
    selectedItems: { items: [], restaurantName: '' },
};

let cartReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case "ADD_TO_CART": {
            let newState = { ...state };

            if (payload.checkboxValue) {
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, payload],
                    restaurantName: payload.restaurantName,
                };
            } else {
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.title !== payload.title),
                    ],
                    restaurantName: payload.restaurantName,
                };
            }
            return newState;
        }

        case 'REMOVE_ALL': {
            state.selectedItems.items = []
            state.selectedItems.restaurantName = []
            return {
                state
            }
        }

        default:
            return state;
    }
};

export default cartReducer;