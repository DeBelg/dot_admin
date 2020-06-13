import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import logo from "../../../assets/logos/dot-black.svg";
import "../../../App.css";
import styles from "./styles";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  };

  _onChange = where => event => {
    this.setState({ [where]: event.target.value });
  };

  _handleLogin = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const { login } = this.props.actions;
    if (email.length > 1 && password.length > 5) {
      login({ email, password, history });
    }
  };

  render() {
    return (
      <div className="App-header">
        <Paper
          elevation={2}
          style={{
            padding: "80px 80px 80px 80px",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <img style={{ width: "90%" }} src={logo} alt="DOT logo" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Login</p>
          <TextField
            required
            autoComplete="off"
            id="standard-required"
            label="Email"
            margin="normal"
            style={styles.input}
            onChange={this._onChange("email")}
          />
          <TextField
            id="standard-password-input"
            required
            label="Password"
            type="password"
            autoComplete="off"
            margin="normal"
            style={styles.input}
            onChange={this._onChange("password")}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={this._handleLogin}
            style={styles.button}
          >
            Login
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Login);
