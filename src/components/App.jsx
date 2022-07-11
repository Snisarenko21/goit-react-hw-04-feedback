import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import css from './App.module.css';

export class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  leaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    const options = this.state;
    return Object.values(options).reduce((total, value) => value + total, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    console.log(good);
    return this.countTotalFeedback() === 0
      ? '0'
      : ((good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    const elementKey = Object.keys(this.state);
    return (
      <div className={css.container}>
        {/* <div className={css.wrapper}> */}
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions
              options={elementKey}
              onLeaveFeedback={this.leaveFeedback}
            />
          </div>
        </Section>
        <div className={css.feedbackText}>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                bad={this.state.bad}
                neutral={this.state.neutral}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
