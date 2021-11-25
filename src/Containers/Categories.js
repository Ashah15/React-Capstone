/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import getCategories from '../Actions/allCategories';
import Category from '../Components/Category';
import {
  getProductsError,
  getProductsPending,
  getCategoriesList,
  categoryName,
  categoryDetails,
  categoryImage,
} from '../Constants/Index';

const AllCategories = props => {
  const { getCategories, categories } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <h1 className="welcome-text"> Curious For More Yummy Meals?</h1>
      <div className="container">
        {categories.map(el => <Link key={el.idCategory} to={`/category/${el.strCategory}`}><Category name={categoryName(el)} description={categoryDetails(el)} src={categoryImage(el)} /></Link>)}
      </div>
    </div>
  );
};

AllCategories.propTypes = {
  categories: PropTypes.arrayOf(object).isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories,
};

const mapStateToProps = state => {
  const { categories } = state;
  return (
    {
      error: getProductsError(categories),
      categories: getCategoriesList(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);