import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

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
    return this.countTotalFeedback() === 0
      ? '0'
      : ((good / this.countTotalFeedback()) * 100).toFixed(0);
  };
  render() {
    return (
      <div className="Feedback">
        <Section title="Please, leave feedback">
          <div>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </div>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              options={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
// export default App;
