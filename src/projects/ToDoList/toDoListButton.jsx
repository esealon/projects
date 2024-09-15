import React from "react";
import ReusableButton from "../../buttonProject";
import ToDo from "./toDoList";
import { useState } from "react";

function ToDoListButton() {
  const [showToDoList, setShowToDoList] = useState(false);

  return (
    <div>
      <ReusableButton
        text="To Do List"
        image="https://res.cloudinary.com/dvucxxtju/image/upload/v1726399610/smartphone-570507_640_l2j77s.jpg"
        hoverImage="https://res.cloudinary.com/dvucxxtju/image/upload/v1726399435/circle-2470301_640_wl1r77.jpg"
        activeImage="https://res.cloudinary.com/dvucxxtju/image/upload/v1726400486/lists-6131220_640_wqoioa.jpg"
        height="100px"
        width="300px"
        showElementt={showToDoList}
        setShowElementP={setShowToDoList}
        elementP={<ToDo />}
      ></ReusableButton>
    </div>
  );
}

export default ToDoListButton;
