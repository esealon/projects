import React from "react";
import ReusableButton from "../../buttonProject";
import { useState } from "react";
import LuckyN from "./LuckyN";
import { sum } from "./utils";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function DiceButton() {
  const [showLuckyN, setShowLuckyN] = useState(false);

  const handleClickDice = () => {
    setShowLuckyN((prevShowProject) => !prevShowProject); // Toggle the state
  };

  return (
    <div>
      {/* Example usage of the reusable button with onClick */}
      <ReusableButton
        text="Dice game"
        image="https://res.cloudinary.com/dvucxxtju/image/upload/v1726072326/dice-568187_640_ohuz0q.jpg"
        hoverImage="https://res.cloudinary.com/dvucxxtju/image/upload/v1726070688/game-7634718_640_c0nlzx.jpg"
        onClick={handleClickDice}
        height="100px"
        width="300px"
      >
        {" "}
        // Pass the function to be called on click\
        {showLuckyN ? "Hide Project" : "Show Project"}
      </ReusableButton>
      {showLuckyN && <LuckyN winCheck={lessThan4} title="Roll less than 4" />}
      {showLuckyN && <LuckyN winCheck={allSameValue} title="Roll all equal" />}
    </div>
  );
}

export default DiceButton;
