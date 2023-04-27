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


// import { Component } from "react";
// import { connect } from "react-redux";
// import authOperations from "../redux/auth/auth-operations";
// import { Button, IconButton, InputAdornment } from "@mui/material";
// import { TextField } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// class RegisterView extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     showPassword: true,
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   togglePasswordVisibility = () => {
//     this.setState((prevState) => ({
//       showPassword: !prevState.showPassword,
//     }));
//   };

//   render() {
//     const { name, email, password, showPassword } = this.state;

//     return (
//       <div style={{ marginTop: "35px", width: "320px" }}>
//         <h1 style={{ marginBottom: "35px" }}>Registration</h1>

//         <form
//           style={{ marginBottom: "15px" }}
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
//           <TextField
//             style={{ marginBottom: "15px", width: 300 }}
//             label="Name:"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />

//           <TextField
//             style={{ marginBottom: "15px", width: 300 }}
//             label="E-mail:"
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />

//           <TextField
//             style={{ width: 300 }}
//             label="Password:"
//             type={showPassword ? "password" : "text"}
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={this.togglePasswordVisibility}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <br />

//           <Button
//             style={{ marginTop: "25px" }}
//             type="submit"
//             variant="contained"
//             color="primary"
//           >
//             SIGN UP ✅
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);






// import { Component } from "react";
// import { connect } from "react-redux";
// import authOperations from "../redux/auth/auth-operations";
// import { Button, IconButton, InputAdornment } from "@mui/material";
// import { TextField } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify"; //toast
// import "react-toastify/dist/ReactToastify.css";

// class RegisterView extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     showPassword: true,
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const { name, email, password } = this.state;
  
//     if (!name || !email || !password) {
//       toast.error("Будь ласка напишіть ім'я, емейл і пароль");
//       return;
//     }
  
//     // Check if email is too short
//     if (email.length < 7) {
//       return toast.error("Ваш емейл має надто мало символів, будь ласка напишіть довший емейл");
//     }
  
//     // Check if email starts with capital letter
//     if (email.charAt(0) === email.charAt(0).toUpperCase()) {
//       return toast.error("Будь ласка напишіть свій емейл з малесеньких літер");
//     }
  
//     try {
//       await this.props.onRegister({ name, email, password });
//       toast.error("Ваш пароль не підходить, напишіть будь ласка інший");
//       this.setState({ name: "", email: "", password: "" });
//     } catch (error) {
//       toast.error("Invalid password, please try again");
//     }
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   togglePasswordVisibility = () => {
//     this.setState((prevState) => ({
//       showPassword: !prevState.showPassword,
//     }));
//   };

//   render() {
//     const { name, email, password, showPassword } = this.state;

//     return (
//       <div style={{ marginTop: "35px", width: "320px" }}>
//         <h1 style={{ marginBottom: "35px" }}>Registration</h1>

//         <form
//           style={{ marginBottom: "15px" }}
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
//           <TextField
//             style={{ marginBottom: "15px", width: 300 }}
//             label="Name:"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />

//           <TextField
//             style={{ marginBottom: "15px", width: 300 }}
//             label="E-mail:"
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />

//           <TextField
//             style={{ width: 300 }}
//             label="Password:"
//             type={showPassword ? "password" : "text"}
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={this.togglePasswordVisibility}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <br />
//           <Button
//             style={{ marginTop: "25px" }}
//             type="submit"
//             variant="contained"
//             color="primary"
//           >
//             SIGN UP ✅
//           </Button>
//         </form>
//         <ToastContainer />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);



import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify"; //toast
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types';
// import { func } from 'prop-types';

export default function RegisterView() {
const dispatch = useDispatch();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(true);

const handleSubmit = async (e) => {
e.preventDefault();

if (!name || !email || !password) {
  toast.error("Будь ласка напишіть ім'я, емейл і пароль");
  return;
}

// Check if email is too short
if (email.length < 7) {
  return toast.error("Ваш емейл має надто мало символів, будь ласка напишіть довший емейл");
}

// Check if email starts with capital letter
if (email.charAt(0) === email.charAt(0).toUpperCase()) {
  return toast.error("Будь ласка напишіть свій емейл з малесеньких літер");
}

try {
  await dispatch(authOperations.register({ name, email, password }));
  toast.error("Ваш пароль не підходить, напишіть будь ласка інший");
  setName("");
  setEmail("");
  setPassword("");
} catch (error) {
  toast.error("Invalid password, please try again");
}
};

const handleChange = (event) => {
const { name, value } = event.target;
  switch (name) {
  case "name":
  setName(value);
  break;
  case "email":
  setEmail(value);
  break;
  case "password":
  setPassword(value);
  break;
  default:
  return;
  }
};

const togglePasswordVisibility = () => {
setShowPassword((prevState) => !prevState);
};

return (
<div style={{ marginTop: "35px", width: "320px" }}>
<h1 style={{ marginBottom: "35px" }}>Registration</h1>

  <form
    style={{ marginBottom: "15px" }}
    onSubmit={handleSubmit}
    autoComplete="off"
  >
    <TextField
      style={{ marginBottom: "15px", width: 300 }}
      label="Name:"
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
    />

    <TextField
      style={{ marginBottom: "15px", width: 300 }}
      label="E-mail:"
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
    />

      <TextField
      style={{ width: 300 }}
      label="Password:"
      type={showPassword ? "text" : "password"}
      name="password"
      value={password}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePasswordVisibility}
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
  <ToastContainer />
</div>
);
}

// RegisterView.propTypes = {
//   onRegister: func.isRequired,
//   };

RegisterView.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  onRegister: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
