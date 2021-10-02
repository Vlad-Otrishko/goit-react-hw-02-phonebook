import React from 'react';
import s from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ name, number }) => {
    return (
      <p className={s.record}>
        <span className={s.name}> {name}</span> <span className={s.spacing}>:</span>
        <span className={s.number}>{number}</span>
      </p>
    );
}

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};
