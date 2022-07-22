import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => onleaveFeedback(option)}
      className={css.FeedbacButton}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.prorpTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onleaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
