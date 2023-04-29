import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
showPassword: true,
};

handleChange = ({ target: { name, value } }) => {
this.setState({ [name]: value });
};

togglePasswordVisibility = () => {
this.setState((prevState) => ({
showPassword: !prevState.showPassword,
}));
};

handleSubmit = async (e) => {
e.preventDefault();

const { email, password } = this.state;

if (!email || !password) {
  toast.error("Будь ласка напишіть вваш емейл і пароль");
  return;
}

try {
  await this.props.onLogin({ email, password });
  toast.error("Неправильний емейл або пароль, будь ласка спробуйте ще раз");
  this.setState({ email: "", password: "" });
} catch (error) {
  toast.error("Nothing");
}
};

render() {
const { email, password, showPassword } = this.state;

return (
  <div style={{ display: 'flex', justifyContent: 'center'}}>
    <div style={{ marginTop: "35px" }}>
      <h1 style={{ marginBottom: "35px" }}>Login</h1>
      <ToastContainer />
      <form
        onSubmit={this.handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
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
          style={{ marginTop: 25 }}
          type="submit"
          variant="contained"
          color="primary"
        >
          SIGN IN ✅
        </Button>
      </form>
    </div>
  </div>
);
}
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);