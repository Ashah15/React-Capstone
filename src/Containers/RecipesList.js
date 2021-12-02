/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../Components/Meal';
import fetchAllMeals from '../Actions/allMeals';
import fetchMeal from '../Actions/singleMeal';
import { getProductsError, getProducts, getProductsPending } from '../Constants/Index';
import { UPDATE_CATEGORY } from '../Actions/index';

const MealsList = props => {
  const {
    products, pending, fetchAllMeals, category,
  } = props;

  useEffect(() => {
    fetchAllMeals(category);
  }, [category, fetchAllMeals]);

  return (
    <div>
      <div className="container">
        {products.map(el => (
          <Link to={`/meal/${el.idMeal}`} key={Math.random() * 1000}>
            <MealPreview
              src={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

MealsList.defaultProps = {
  products: [''],
};

MealsList.propTypes = {
  pending: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(String),
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      error: getProductsError(allMeals),
      products: getProducts(allMeals),
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
  fetchMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
