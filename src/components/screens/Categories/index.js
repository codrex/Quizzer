import React from 'react';
import { arrayOf, object } from 'prop-types';
import Screen from '../../common/Screen';
import Button from '../../common/Button';
import './categories.scss';

function Categories({ categories = [] }) {
  return (
    <Screen className="categories">
      <h1 className="header categories__header">Select a category</h1>
      <ul className="categories__wrapper">
        {categories.map(({ icons, name }, index) => (
          <Button
            key={name}
            text={name}
            icon={icons[0]}
            className="categories__item"
            style={{ animationDelay: `.${index}00s` }}
          />
        ))}
      </ul>
    </Screen>
  );
}

Categories.propTypes = {
  categories: arrayOf(object).isRequired,
};

export default Categories;
