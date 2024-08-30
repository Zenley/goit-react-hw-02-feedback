import PropTypes from "prop-types";
import styles from "./Section.module.css";

export const Section = ({ title, children }) => {
  return (
    <section className={styles.stats}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}