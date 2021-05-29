import {
  Button,
  Card,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ApiHelper } from "../services/ApiHelper";

const Login = withRouter(({ history, updateUser }) => {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  console.log(updateUser);

  const login = () => {
    ApiHelper.getInstance()
      .login(username, password)
      .then((user) => {
        if (user) {
          updateUser(user);
          history.push("/home");
        }
      });
  };

  return (
    <div
      className="outerbox"
      style={{
        position: "absolute",
        top: "30%",
        bottom: "30%",
        left: "35%",
        right: "35%",
      }}
    >
      <Card elevation={5} style={{ padding: 30 }}>
        <Typography style={{ textAlign: "center", padding: 10 }} variant="h4">
          Login
        </Typography>
        <FormGroup>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">username</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
            />
          </FormControl>
          <FormControl style={{ margin: 10 }}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              type="password"
              id="my-input"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              aria-describedby="my-helper-text"
            />
          </FormControl>
        </FormGroup>
        <Typography
          style={{
            fontSize: 15,
            color: "grey",
            position: "relative",
            top: "80%",
          }}
        >
          New User?
          <Link>Signup</Link>
        </Typography>
        <Button
          style={{ float: "right", marginTop: 10 }}
          color="primary"
          variant="outlined"
          onClick={login}
        >
          Login
        </Button>
      </Card>
    </div>
  );
});

export default Login;
