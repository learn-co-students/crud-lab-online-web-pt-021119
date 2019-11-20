import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      return { ...state, restaurants: [...state.restaurants, { text: action.restaurant, id: cuid() } ] }

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() } ] }

    default:
      return state
  }

}
