// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { fetchContacts, addContact, removeContact } from "../redux/contacts/contacts-operations"

// const styles = {
//     form: {
//         width: 300,
//     },
//     label: {
//         display: 'flex',
//         flexDirection: 'column',
//         marginBottom: 15,
//     },
// };

// export default function RegisterViews() {
//     const dispatch = useDispatch();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleChange = ({ target: {name, value} }) => {
//         switch (name) {
//             case 'name':
//                 return setName(value);
//             case 'email':
//                 return setEmail(value);
//             case 'password':
//                 return setPassword(value);
//             default:
//                 return;
//         }
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch(contactsOperation.register({ name, email, password}));
//         setName('');
//         setEmail('');
//         setPassword('');
//     }

//     return (
//         <div>
//             <h1>Register Block</h1>

//             <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//                 <label style={styles.label}>
//                     Name
//                     <input type="text" name="name" value={name} onChange={handleChange}></input>
//                 </label>

//                 <label style={styles.label}>
//                     E-mail
//                     <input type="email" name="email" value={email} onChange={handleChange}></input>
//                 </label>
//             </form>
//         </div>
//     )
// }


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addContact } from "../redux/contacts/contacts-actions";

// const styles = {
//   form: {
//     width: 300,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

// export default function RegisterViews() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value);
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(addContact({ name, email, password }));
//     setName('');
//     setEmail('');
//     setPassword('');
//   }

//   return (
//     <div>
//       <h1>Register Block</h1>

//       <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//         <label style={styles.label}>
//           Name
//           <input type="text" name="name" value={name} onChange={handleChange}></input>
//         </label>

//         <label style={styles.label}>
//           E-mail
//           <input type="email" name="email" value={email} onChange={handleChange}></input>
//         </label>
//       </form>
//     </div>
//   )
// }


import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
// import styles from "./RegisterViews.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div style={{ marginTop: "35px", width: '320px' }}>
        <h1 style={{ marginBottom: "35px" }}>Registration</h1>

        <form
          style={{ marginBottom: "15px" }}
          onSubmit={this.handleSubmit}
          // style={styles.form}
          autoComplete="off"
        >
          <TextField
            style={{ marginBottom: "15px", width: 300 }}
            label="Name:"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <TextField
            style={{ marginBottom: "15px", width: 300 }}
            label="E-mail:"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextField
            style={{ width: 300}}
            label="Password:"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <Button
            // style={{ marginTop: 25 }}
            style={{ marginTop: "25px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            SIGN UP ✅
          </Button>
        </form>
      </div>
    );
  }
}
//Short version
const mapDispatchToProps = {
  onRegister: authOperations.register,
};
//Full version
/* const mapDispatchToProps = dispatch=>{
  onSubmit: (data)=>dispatch (authOperations.register(data))
} */

export default connect(null, mapDispatchToProps)(RegisterView);
