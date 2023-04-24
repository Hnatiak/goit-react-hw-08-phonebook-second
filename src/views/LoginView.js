import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/app/app-operations";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import styles from "./LoginViews.module.css";

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
        <h1>Login</h1>

        <form
          style={{ marginTop: "25px" }}
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            style={{ marginRight: "10px" }}
            label="E-mail:"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextField
            label="Password:"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <Button
            className={styles.button}
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
// const mapDispatchToProps = dispatch=>{
//   onSubmit: (data)=>dispatch (authOperations.register(data))
// }

export default connect(null, mapDispatchToProps)(LoginView);