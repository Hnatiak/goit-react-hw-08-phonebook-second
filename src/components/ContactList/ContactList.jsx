import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { removeContact } from '../../redux/contacts/contacts-operations.js';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors.js';
import css from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactsList = visibleContacts.map(({ id, name, phone }) => (
    <ul className={css.contactList}>
        <li className={css.wrapper} key={id}>
            <span className={css.icon}>
                <FaUserAlt />
            </span>
            <span className={css.span}>{name}: {phone}</span>
          <div>
            <button
              className={css.button}
              id={id}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              <FaTrash />
            </button>
          </div>
        </li>
    </ul>
  ));

  return <ul>{contactsList}</ul>;
}

// function ContactList() {
//     const visibleContacts = useSelector(getFilteredContacts);
//     const dispatch = useDispatch();
  
//     if (!visibleContacts) {
//       return null;
//     }
  
//     const contactsList = visibleContacts.map(({ id, name, phone }) => (
//       <ul className={css.contactList}>
//         <li className={css.wrapper} key={id}>
//           <span className={css.icon}>
//             <FaUserAlt />
//           </span>
//           <span className={css.span}>
//             {name}: {phone}
//           </span>
//           <div>
//             <button
//               className={css.button}
//               id={id}
//               type="button"
//               onClick={() => dispatch(removeContact(id))}
//             >
//               <FaTrash />
//             </button>
//           </div>
//         </li>
//       </ul>
//     ));
  
//     return <ul>{contactsList}</ul>;
//   }

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;