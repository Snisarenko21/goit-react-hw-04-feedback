import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      className={css.FeedbacButton}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.prorpTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
