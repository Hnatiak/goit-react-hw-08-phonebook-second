// import React, { Component } from "react";
// import { connect } from "react-redux";
// import authOperations from "../redux/app/app-operations";
// import { Button } from '@mui/material';
// import { TextField } from '@mui/material';
// import styles from "./LoginViews.module.css";

// class LoginView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div style={{ marginTop: "35px" }}>
//         <h1>Login</h1>

//         <form
//           style={{ marginTop: "25px" }}
//           onSubmit={this.handleSubmit}
//           className={styles.form}
//           autoComplete="off"
//         >
//           <TextField
//             style={{ marginRight: "10px" }}
//             label="E-mail:"
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <TextField
//             label="Password:"
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <br />
//           <Button
//             className={styles.button}
//             type="submit"
//             variant="contained"
//             color="primary"
//           >
//             SIGN IN ✅
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };
// //Full version
// // const mapDispatchToProps = dispatch=>{
// //   onSubmit: (data)=>dispatch (authOperations.register(data))
// // }

// export default connect(null, mapDispatchToProps)(LoginView);





















import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div style={{ marginTop: "35px" }}>
        <h1 style={{ marginBottom: "35px" }}>Login</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <TextField
            style={{ marginBottom: "15px", width: 300}}
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
            style={{ marginTop: 25 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            SIGN IN ✅
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
//Full version
/* const mapDispatchToProps = dispatch=>{
  onSubmit: (data)=>dispatch (authOperations.register(data))
} */

export default connect(null, mapDispatchToProps)(LoginView);












// import React, { Component } from "react";
// import { connect } from "react-redux";
// import authOperations from "../redux/auth/auth-operations";
// import { Button } from "@mui/material";
// import { TextField } from "@mui/material";
// import { redirect as Redirect } from 'react-router-dom'

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: 15,
//   },
// };

// class LoginView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;
//     const { isAuthenticated } = this.props;

//     if (isAuthenticated) {
//       return <Redirect to="/contacts" />;
//     }

//     return (
//       <div style={{ marginTop: "35px" }}>
//         <h1 style={{ marginBottom: "35px" }}>Login</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <TextField
//             style={{ marginBottom: "15px" }}
//             label="E-mail:"
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <TextField
//             label="Password:"
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <br />
//           <Button
//             style={{ marginTop: 25 }}
//             type="submit"
//             variant="contained"
//             color="primary"
//           >
//             SIGN IN 🟩
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginView);