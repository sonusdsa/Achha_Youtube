import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className=" flex text-center shadow-lg p-2 border border-blue-400 rounded-lg">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <span className=" font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
