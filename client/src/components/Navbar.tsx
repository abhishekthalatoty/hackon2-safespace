import {
  AppBar,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { ApiHelper } from "../services/ApiHelper";

const useStyles = makeStyles((theme) => ({
  Button: {
    color: "red",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = ({ updateUser }) => {
  const logout = () => {
    ApiHelper.getInstance()
      .logout()
      .then((val) => {
        if (val.msg == "ok") {
          updateUser(null);
        }
      });
  };

  let tags = [];

  const handleChange = (event) => {
    if (event.target.checked) {
      tags.push(event.target.value);
    } else {
      tags = tags.filter((t) => t.value != event.target.value);
    }
    console.log(tags);
  };

  const [questionBox, toggleQuestionBox] = useState(false);
  const [question, changeQuestion] = useState("");

  const handleClose = () => toggleQuestionBox(false);

  const submitQuestion = () => {
    ApiHelper.getInstance()
      .submitQuestion(question, tags)
      .then(() => {
        changeQuestion(null);
        toggleQuestionBox(false);
      });
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <UserContext.Consumer>
          {(user) => {
            return (
              <Toolbar>
                <Button color="inherit" component={Link} to={"/home"}>
                  <Typography>Safe Space</Typography>
                </Button>
                {user && (
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>

                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                )}
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  {user && (
                    <>
                      <Button
                        onClick={() => {
                          toggleQuestionBox(true);
                        }}
                        color="inherit"
                      >
                        Post
                      </Button>
                      <Button onClick={logout} color="inherit">
                        Log Out
                      </Button>
                    </>
                  )}
                </div>
                <Dialog
                  open={questionBox}
                  onClose={handleClose}
                  fullWidth
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Ask your Question
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      multiline
                      rows={4}
                      rowsMax={10}
                      variant="outlined"
                      value={question}
                      onChange={(event) => {
                        changeQuestion(event.target.value);
                      }}
                      fullWidth
                    />
                    <Typography style={{ marginTop: "10px" }}>
                      Tags :
                    </Typography>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={"religion"}
                            onChange={handleChange}
                            name="religion"
                          />
                        }
                        label="religion"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={"race"}
                            onChange={handleChange}
                            name="race"
                          />
                        }
                        label="race"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={"gender"}
                            name="gender"
                            onChange={handleChange}
                          />
                        }
                        label="gender"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={"nation"}
                            onChange={handleChange}
                            name="nation"
                          />
                        }
                        label="nation"
                      />
                    </FormGroup>

                    <DialogActions>
                      <Button
                        color="primary"
                        onClick={() => {
                          changeQuestion(null);
                          toggleQuestionBox(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        onClick={submitQuestion}
                      >
                        Submit
                      </Button>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
              </Toolbar>
            );
          }}
        </UserContext.Consumer>
      </AppBar>
    </div>
  );
};

export default Navbar;
