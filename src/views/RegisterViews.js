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
import { Button, IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    showPassword: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { name, email, password, showPassword } = this.state;

    return (
      <div style={{ marginTop: "35px", width: "320px" }}>
        <h1 style={{ marginBottom: "35px" }}>Registration</h1>

        <form
          style={{ marginBottom: "15px" }}
          onSubmit={this.handleSubmit}
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
            style={{ width: 300 }}
            label="Password:"
            type={showPassword ? "password" : "text"}
            name="password"
            value={password}
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <br />

          <Button
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

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
