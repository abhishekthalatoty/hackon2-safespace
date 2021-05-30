import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";

const ChatBubble = () => {
  return (
    <div>
      <Card
        elevation={3}
        style={{
          maxWidth: 400,
          borderRadius: "17px",
          marginTop: 15,
          padding: 7,
        }}
      >
        <Typography style={{ color: "grey" }}>Prateek Singamsetty</Typography>
        <CardContent style={{ padding: 0 }}>
          <Typography>Hi this is prateek! how r u?</Typography>
        </CardContent>
        <CardActions style={{ padding: 0 }}>
          <Typography style={{ color: "grey", marginLeft: 330 }}>
            12:02pm
          </Typography>
        </CardActions>
      </Card>
      <Card
        elevation={3}
        style={{
          maxWidth: 400,
          borderRadius: "17px",
          marginTop: 15,
          padding: 7,
        }}
      >
        <Typography style={{ color: "grey" }}>Prateek Singamsetty</Typography>
        <CardContent style={{ padding: 0 }}>
          <Typography>Hi this is prateek! how r u?</Typography>
        </CardContent>
        <CardActions style={{ padding: 0 }}>
          <Typography style={{ color: "grey", marginLeft: 330 }}>
            12:02pm
          </Typography>
        </CardActions>
      </Card>
      <Card
        elevation={3}
        style={{
          maxWidth: 400,
          borderRadius: "17px",
          marginTop: 15,
          padding: 7,
        }}
      >
        <Typography style={{ color: "grey" }}>Prateek Singamsetty</Typography>
        <CardContent style={{ padding: 0 }}>
          <Typography>Hi this is prateek! how r u?</Typography>
        </CardContent>
        <CardActions style={{ padding: 0 }}>
          <Typography style={{ color: "grey", marginLeft: 330 }}>
            12:02pm
          </Typography>
        </CardActions>
      </Card>
      <Card
        elevation={3}
        style={{
          maxWidth: 400,
          borderRadius: "17px",
          marginTop: 15,
          padding: 7,
        }}
      >
        <Typography style={{ color: "grey" }}>Prateek Singamsetty</Typography>
        <CardContent style={{ padding: 0 }}>
          <Typography>Hi this is prateek! how r u?</Typography>
        </CardContent>
        <CardActions style={{ padding: 0 }}>
          <Typography style={{ color: "grey", marginLeft: 330 }}>
            12:02pm
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default ChatBubble;
