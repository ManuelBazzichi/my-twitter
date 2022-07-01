import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's Happening?</h2>

        <TwitterTweetEmbed tweetId={"1538960202640281603"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RyanHoliday"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="https://www.facebook.com/AnotherShot95"
          options={{ text: "Nice to see you here!", via: "BazzichiManuel" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
