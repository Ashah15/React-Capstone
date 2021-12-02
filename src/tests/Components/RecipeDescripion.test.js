/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeDetails from '../../Components/RecipeDescription';

const initial = {
  category: 'test',
  area: 'jest',
  ingredients: ['react', 'redux'],
  className: 'component',
};

const {
  ingredients, category, area, className,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(
    <RecipeDetails
      ingredients={ingredients}
      category={category}
      area={area}
      className={className}
    />,
  );
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one div', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('should render up to six span elements', () => {
    expect(component.find('span').length).toBe(6);
  });
});