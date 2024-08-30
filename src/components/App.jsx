import { Component } from "react"
import { Statistics } from "./Statistics/Statistics"
import { Section } from "./Section/Section"
import { Notification } from "./Notification/Notification"
import { FeedbackOptions } from "./Options/FeedbackOptions"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state 
  return good + neutral + bad;
}

countPositiveFeedbackPercentage = () => {
  const total = this.countTotalFeedback();
  return total > 0 ? Math.round( this.state.good * 100 / total ) : 0;
}
  
handleClick = type => {
  console.log(`Feedback received: ${type}`);
  this.setState(prevState => ({
    [type]: prevState[type] + 1
  }));
}

render () {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave us your feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleClick}
        />
      </Section>
      <Section title="Statistics">
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        ) : (
          <Notification message="No feedback given just yet." />
        )}
      </Section>
    </div>
  );
};

};