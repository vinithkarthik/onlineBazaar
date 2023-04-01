import constants from "../Components/Products/Constants"

export const productReducer = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_ADDED_PRODUCT:
      return {
        ...state,
        addedProducts: action.addedProducts
      }
    case constants.UPDATE_TOTAL_PRODUCTS:
      return {
        ...state,
        totalProducts: action.totalProducts
      }
    default:
      return state
  }
}