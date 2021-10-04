import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ visibleList, onDelete }) => {
    return (
      <ul className={s.list}>
        {visibleList.map(item => (
          <li key={item.id} className={s.line}>
            <Contact
              name={item.name}
              number={item.number}
              onDelete={onDelete}
            />
            <button
              type="button"
              className={s.deleteButton}
              onClick={()=>onDelete(item.id)}
            ></button>
          </li>
        ))}
      </ul>
    );

};
export default ContactList;

ContactList.propTypes = {
  visibleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })),
  onDelete: PropTypes.func,
};
