import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option => (
                <button
                className={styles.feedbackButton}
                    key={option}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}