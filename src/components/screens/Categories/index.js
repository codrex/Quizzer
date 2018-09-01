import React from 'react';
import {
  arrayOf, object, func,
} from 'prop-types';
import Screen from '../../common/Screen';
import Button from '../../common/Button';
import './categories.scss';


function Categories({ categories = [], handleClick }) {
  return (
    <Screen className="categories">
      <h1 className="header categories__header">Select a category</h1>
      <ul className="categories__wrapper">
        {categories.map(({ icons, name, value }) => (
          <Button
            key={name}
            text={name}
            icon={icons[0]}
            className="categories__item"
            handleClick={() => handleClick(value)}
          />
        ))}
      </ul>
    </Screen>
  );
}

Categories.propTypes = {
  categories: arrayOf(object).isRequired,
  handleClick: func.isRequired,
};


export default Categories;
