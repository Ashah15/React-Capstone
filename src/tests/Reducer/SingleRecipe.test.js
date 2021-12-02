import singleRecipeReducer from '../../Reducers/SingleRecipe';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('update category', () => {
  it('should show a single recipe', () => {
    expect(singleRecipeReducer(initialState, { type: 'FETCH_MEAL_SUCCESS', details: { x: 'oo', y: 'boo' } })).toEqual({ ...initialState, details: { x: 'oo', y: 'boo' } });
  });
});