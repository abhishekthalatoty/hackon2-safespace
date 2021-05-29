import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  FormLabel,
  Grid,
  Box,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { ApiHelper } from "../services/ApiHelper";

const Signup = withRouter(({ history, updateUser }) => {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [displayName, updateDisplayName] = useState("");
  const [confirmPassword, updateCPassword] = useState("");

  const signup = () => {
    if (username && password == confirmPassword) {
      ApiHelper.getInstance()
        .signup(username, displayName, password)
        .then((data) => {
          console.log("hiii");

          console.log(data);

          if (data && data.id) {
            updateUser(data);
            history.push("/home");
          }
        });
    }
  };

  return (
    <div
      className="outerbox"
      style={{
        position: "absolute",
        top: "22%",
        bottom: "30%",
        left: "35%",
        right: "35%",
      }}
    >
      <Card elevation={5} style={{ padding: 30 }}>
        <Typography style={{ textAlign: "center", padding: 10 }} variant="h4">
          Sign Up
        </Typography>
        <FormGroup>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Display Name</InputLabel>
            <Input
              value={displayName}
              onChange={(e) => updateDisplayName(e.target.value)}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              type="password"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
            <Input
              type="password"
              id="my-input"
              value={confirmPassword}
              onChange={(e) => updateCPassword(e.target.value)}
              aria-describedby="my-helper-text"
            />
          </FormControl>
        </FormGroup>
        <Typography
          style={{
            fontSize: 15,
            color: "grey",
            position: "relative",
            top: "105%",
          }}
        >
          Existing User?
          <Link to={"/login"}> Login</Link>
        </Typography>
        <Button
          style={{ float: "right", marginTop: 10 }}
          color="primary"
          onClick={signup}
          variant="outlined"
        >
          Signup
        </Button>
      </Card>
    </div>
  );
});

export default Signup;
