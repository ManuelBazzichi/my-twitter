import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Kate Mortage",
      username: "katemortage",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    });

    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox_input">
          <Avatar src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          variant="outlined"
          className="tweetBox_tweetButton"
          type="submit"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
