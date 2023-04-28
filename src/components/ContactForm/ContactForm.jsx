// import { useState } from "react";
// import PropTypes from "prop-types";
// import { TextField, Button } from '@mui/material';
// import style from "./ContactForm.module.css";

// const ContactForm = ({ onSubmitData }) => {
// const [state, setState] = useState({
// name: "",
// number: "",
// });

// const handleChange = (event) => {
// const { name, value } = event.currentTarget;
// setState((prevState) => ({ ...prevState, [name]: value }));
// };

// const handleSubmit = (event) => {
// event.preventDefault();
// const { name, number } = state;
// const contactForAdd = { name, number };
// onSubmitData(contactForAdd);
// reset();
// };

// const reset = () => {
// setState({ name: "", number: "" });
// };

// return (
// <div className={style.form}>
//   <h1 style={{ marginBottom: 25 }}>Add contact</h1>
//   <form type="submit" onSubmit={handleSubmit}>
//     <TextField
//     label="Name:"
//     type="text"
//     name="name"
//     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
//     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     required
//     onChange={handleChange}
//     value={state.name}
//     style={{ marginRight: 25 }}
//     />
//     <TextField
//            label="Number:"
//            type="tel"
//            name="number"
//            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//            required
//            onChange={handleChange}
//            value={state.number}
//          />
//     <br />
//     <Button
//     className={style.button_second}
//     type="submit"
//     variant="contained"
//     color="primary"
//     style={{ marginTop: 25 }}
//     >
//     Add contact
//     </Button>
//   </form>
// </div>
// );
// };

// ContactForm.propTypes = {
// onSubmitData: PropTypes.func.isRequired,
// };

// export default ContactForm;


import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from '@mui/material';
import style from "./ContactForm.module.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const ContactForm = ({ onSubmitData }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = state;
    const contactForAdd = { name, number };
    onSubmitData(contactForAdd);
    reset();
  };

  const reset = () => {
    setState({ name: "", number: "" });
  };
  
  const handlePhoneInputChange = (event) => {
    let { value } = event.currentTarget;
  
    if (value && !value.startsWith("+")) {
      value = "+" + value;
    }
  
    const phoneNumber = parsePhoneNumberFromString(value);
    const formattedPhoneNumber = phoneNumber ? phoneNumber.formatInternational() : value;
  
    setState((prevState) => ({ ...prevState, number: formattedPhoneNumber }));
  };

  return (
    <div className={style.form}>
      <h1 style={{ marginBottom: 25 }}>Add contact</h1>
      <form type="submit" onSubmit={handleSubmit}>
        <TextField
          label="Name:"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={state.name}
          style={{ marginRight: 25 }}
        />
        <TextField
          label="Number:"
          type="tel"
          name="number"
          inputMode="numeric"
          title="Phone number must start with + and contain only digits, spaces, dashes, and parentheses"
          required
          onChange={handlePhoneInputChange}
          value={state.number}
          inputProps={{ minLength: 7 }}
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
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;