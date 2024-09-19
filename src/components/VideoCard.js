import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  // Check if 'info' object exists
  if (!info) {
    return <div>No video information available</div>;
  }

  // Destructure 'snippet' and 'statistics' from 'info'
  const { snippet = {}, statistics = {} } = info;

  // Destructure properties from 'snippet'
  const { channelTitle, title, thumbnails } = snippet;

  // Destructure properties from 'statistics'
  const { viewCount, likeCount, commentCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      {/* Display the video thumbnail */}
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails && thumbnails.medium && thumbnails.medium.url}
      />

      {/* Display video title, channel title, view count, like count, and comment count */}
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>Views: {viewCount}</li>
        <li>Likes: {likeCount}</li>
        <li>Comments: {commentCount}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
