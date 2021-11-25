import allMealsReducer from '../../Reducers/Recipes';

const initialState = {
  pending: false,
  products: [],
  error: undefined,
  category: undefined,
};

describe('update category', () => {
  it('should update the current state of products', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_SUCCESS', products: ['vegan', 'beef'] })).toEqual({ ...initialState, pending: false, products: ['vegan', 'beef'] });
  });
});