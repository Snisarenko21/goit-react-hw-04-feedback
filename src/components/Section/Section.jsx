import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2 className={css.StatisticsTitle}> {title} </h2>}
      {children}
    </div>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
