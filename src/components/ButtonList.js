import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Cricket",
  "Valentines",
  "News",
  "hello  ",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((data, index) => (
        <Button key={index} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;
