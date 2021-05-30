import React from "react";
import ChatRoom from "./ChatRoom";

const Chat = () => {
  return (
    <body
      style={{
        height: "100%",
        backgroundColor: "#bfbfbf",
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div className="App" style={{ marginTop: "65px" }}>
        <ChatRoom />
      </div>
    </body>
  );
};

export default Chat;
