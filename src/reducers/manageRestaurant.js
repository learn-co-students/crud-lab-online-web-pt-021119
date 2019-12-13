import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const resto = { text: action.text, id: cuid() }
      return {
        restaurants: state.restaurants.concat(resto),
        reviews: state.reviews
      }

    case 'DELETE_RESTAURANT':
      return {
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id ),
        reviews: state.reviews
      }

    case 'ADD_REVIEW':
      const review = { text: action.text, restaurantId: action.id, id: cuid() }
      
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.concat(review)
      }

    case 'DELETE_REVIEW':
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    default:
      return state
  }
}
