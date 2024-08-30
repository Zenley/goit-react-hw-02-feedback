import PropType from 'prop-types'
import styles from './Statistics.module.css'

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
 return (
    <div>
        <div className={styles.rates}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  </div>
 );

};

Statistics.propTypes ={
    good: PropType.number.isRequired,
    neutral: PropType.number.isRequired,
    bad: PropType.number.isRequired,
    total: PropType.number.isRequired,
    positivePercentage: PropType.number.isRequired
}