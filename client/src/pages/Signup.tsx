import React from "react";
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

const Signup = withRouter(({ history }) => {
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
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              type="email"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
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
          variant="outlined"
        >
          Signup
        </Button>
      </Card>
    </div>
  );
});

export default Signup;
