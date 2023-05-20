import "../App.css";
import React, { useState, useEffect } from "react";
import { Grid, FormControl, TextField, Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Telegram";

function ChatFooter({ texts }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const insertMessage = (message) => {
    //add each message to message array
    if (message === "") {
      return;
    }
    setMessages([...messages, message]);
    setMessage("");
  };

  useEffect(() => {
    texts(messages);
  }, [messages]);

  return (
    <div className="chat-footer">
      <Grid container spacing={1} className="chat-footer-grid">
        <Grid item sm={11}>
          <Box component="form" noValidate autoComplete="off">
            <FormControl>
              <TextField
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="chat-textfiled"
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item sm={1}>
          <IconButton
            aria-label="send"
            size="large"
            onClick={() => insertMessage(message)}
            className="fab"
          >
            <SendIcon fontSize="inherit" className="send-icon" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChatFooter;
