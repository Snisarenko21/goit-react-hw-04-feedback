import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const types = { good, neutral, bad };
  const typesLabels = Object.keys(types);
  const totalCount = Object.values(types).reduce((acc, curr) => acc + curr, 0);

  const leaveFeedback = label => {
    switch (label) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  function countpositivePercentage() {
    if (totalCount === 0) {
      return 0;
    }
    return Math.round((good / totalCount) * 100);
  }

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <div>
          <FeedbackOptions
            options={typesLabels}
            onleaveFeedback={leaveFeedback}
          />
        </div>
      </Section>
      <div className={css.feedbackText}>
        <Section title="Statistics">
          {totalCount > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount}
              positivePercentage={countpositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
