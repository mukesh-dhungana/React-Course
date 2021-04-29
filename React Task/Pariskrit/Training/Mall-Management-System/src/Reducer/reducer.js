export const initialState = {
  mallDetails: { title: "", address: "", image: "" },
  shopDetails: [{ title: "", description: "", shopImages: [] }],
  allDatas: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "handleShopInputChange":
      return {
        ...state,
        shopDetails: [
          ...state.shopDetails.map((shop, index) =>
            +action.id === index
              ? { ...shop, [action.name]: action.value }
              : shop
          ),
        ],
      };

    case "handleShopImagesChange":
      return {
        ...state,
        shopDetails: [
          ...state.shopDetails.map((shop, index) =>
            +action.id === index
              ? { ...shop, [action.name]: Object.values(action.value) }
              : shop
          ),
        ],
      };

    case "handleMallInputChange":
      return {
        ...state,
        mallDetails: { ...state.mallDetails, [action.name]: action.value },
      };

    case "Save_Shops":
      return {
        ...state,
        shopDetails: action.payload,
      };

    case "Add_ShopFields":
      return {
        ...state,
        shopDetails: [
          ...state.shopDetails,
          { title: "", description: "", shopImages: [] },
        ],
      };

    case "Reset_ShopDetails":
      return {
        ...state,
        shopDetails: [{ title: "", description: "", shopImages: [] }],
      };

    case "Save_AllData":
      return { ...state, allDatas: action.payload };
    default:
      return state;
  }
};
