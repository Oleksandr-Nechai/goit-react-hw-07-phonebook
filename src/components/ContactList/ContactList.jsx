import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/actions/actions';
import { getVisibleContacts } from '../../redux/selectors/selectors';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const onDelete = value => dispatch(phonebookActions.deleteContact(value));
  const contacts = useSelector(getVisibleContacts);

  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.list_li}>
            <span className={styles.span}>{contact.name}</span>
            <span className={styles.span}>{contact.number}</span>
            <button
              type="button"
              id={contact.id}
              onClick={() => onDelete(contact.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
