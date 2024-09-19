import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { makeMessage, nameGenerate } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      dispatch(
        addMessage({
          name: nameGenerate(),
          message: makeMessage(20),
        })
      );
      console.log("Api polling");
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-full h-[600px] border border-black ml-2  bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="flex p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sonu Yadav",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className=" px-2 h-8 w-72 border border-black rounded-l-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className=" p-1 px-4 bg-green-200 rounded-r-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
