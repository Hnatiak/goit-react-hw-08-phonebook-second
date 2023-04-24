// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import {
//   addContact,
//   fetchContacts,
// } from '../../redux/contacts/contacts-actions';
// import css from './ContactForm.module.css';

// export default function ContactForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleChange = ({ currentTarget: { name, value } }) => {
//     name === 'name' ? setName(value) : setPhone(value);
//   };

//   const resetState = () => {
//     setName('');
//     setPhone('');
//   };
//   console.log(onSubmit);

//   const handleSubmit = e => {
//     resetState();
//     dispatch(addContact({ name, phone }));
//     e.preventDefault();
//     onSubmit({ name, phone });
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label}>
//       <span className={css.title}>Name</span>
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label className={css.label}>
//       <span className={css.title}>Number</span>
//         <input
//           className={css.input}
//           type="tel"
//           name="phone"
//           value={phone}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <button className={css.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

import style from "./ContactForm.module.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };

    this.props.onSubmitData(contactForAdd);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <div className={style.form}>
        <form type="submit" onSubmit={this.handleSubmit}>
          <TextField
            label="Name:"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
            style={{ marginRight: 25 }}
          />
          <TextField
            label="Number:"
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <br />
          <Button
            className={style.button_second}
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 25 }}
          >
            Add contact
          </Button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default ContactForm;