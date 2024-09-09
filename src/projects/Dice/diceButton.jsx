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
    setShowLuckyN(true);
  };

  return (
    <div>
      {/* Example usage of the reusable button with onClick */}
      <ReusableButton
        text="Click me"
        image="https://res.cloudinary.com/dvucxxtju/image/upload/v1725911774/dice-2031511_640_wmpdbw.jpg"
        // hoverImage="https://example.com/hover-image.jpg"
        onClick={handleClickDice} // Pass the function to be called on click
      />
      {showLuckyN && <LuckyN winCheck={lessThan4} title="Roll less than 4" />}
      {showLuckyN && <LuckyN winCheck={allSameValue} title="Roll all equal" />}
    </div>
  );
}

export default DiceButton;
