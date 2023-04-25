// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import { FaTrash, FaUserAlt } from 'react-icons/fa';
// import { removeContact } from '../../redux/contacts/contacts-actions.js';
// // import { removeContact } from '../../redux/contacts/contacts-actions.js';
// import { getFilteredContacts } from '../../redux/contacts/contacts-operations.js';
// import css from './ContactList.module.css';

// function ContactList() {
//   const visibleContacts = useSelector(getFilteredContacts);
//   const dispatch = useDispatch();

//   const contactsList = visibleContacts.map(({ id, name, phone }) => (
//     <ul className={css.contactList}>
//         <li className={css.wrapper} key={id}>
//             <span className={css.icon}>
//                 <FaUserAlt />
//             </span>
//             <span className={css.span}>{name}: {phone}</span>
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
//     </ul>
//   ));

//   return <ul>{contactsList}</ul>;
// }

import { Component } from "react";
import PropTypes from "prop-types";
import { Button } from '@mui/material';
import css from './ContactList.module.css'


class ContactList extends Component {
  deleteId = (Id) => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map((contact) => {
      return (
        <li key={contact.id} id={contact.id} className={css.contacts_list}>
          <Button
            // style={{ marginLeft: 25, height: 30, margin: 5 }}
            className={css.button_second}
            data-id={contact.id}
            variant="contained"
            color="primary"
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </Button>
          {`${contact.name}: ${contact.number}`}
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;