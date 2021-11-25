/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = ({
  category, area, ingredients, className,
}) => (
  <div className={className}>
    <p>
      <span>
        Category :
      </span>
      <span>
        {category}
      </span>
    </p>
    <hr />
    <p>
      <span>
        Area :
      </span>
      <span>
        {area}
      </span>
    </p>
    <hr />
    <p>
      Ingredients:
    </p>
    {ingredients.map(el => (
      <span key={Math.random() * 1000}>
        {el}
        {' '}
        |
        {' '}
      </span>
    ))}
    <hr />
  </div>
);

RecipeDetails.defaultProps = {
  className: 'w-50',
};

RecipeDetails.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  className: PropTypes.string,
};

export default RecipeDetails;
