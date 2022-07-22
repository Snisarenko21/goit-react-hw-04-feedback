import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul>
      <li className={css.StatisticsValue}>
        <span className={css.StatisticsFeedback}>good:</span> {good}
      </li>
      <li className={css.StatisticsValue}>
        <span className={css.StatisticsFeedback}>bad:</span> {bad}
      </li>
      <li className={css.StatisticsValue}>
        <span className={css.StatisticsFeedback}>neutral:</span> {neutral}
      </li>
      <li className={css.StatisticsValue}>
        <span className={css.StatisticsFeedback}>total:</span> {total}
      </li>
      <li className={css.StatisticsValue}>
        <span className={css.StatisticsFeedback}>positive feedback:</span>
        {positivePercentage}%
      </li>
    </ul>
  );
};

// const Statistics = ({ options, total, positivePercentage }) => {
//   return (
//     <div>
//       {Object.keys(options).map(key => (
//         <p key={key}>
//           {key} : {options[key]}
//         </p>
//       ))}
//       <div className={css.StatisticsValue}>
//         <p>
//           Total : <span className={css.StatisticsValue}> {total} </span>
//         </p>
//         <p>
//           PositiveFeedback :
//           <span className={css.StatisticsFeedback}>
//             {' '}
//             {positivePercentage} %{' '}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
