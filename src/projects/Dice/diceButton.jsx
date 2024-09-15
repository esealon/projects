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

  return (
    <div>
      <ReusableButton
        text="Dice game"
        image="https://res.cloudinary.com/dvucxxtju/image/upload/v1726072326/dice-568187_640_ohuz0q.jpg"
        hoverImage="https://res.cloudinary.com/dvucxxtju/image/upload/v1726070688/game-7634718_640_c0nlzx.jpg"
        activeImage="https://res.cloudinary.com/dvucxxtju/image/upload/v1725911774/dice-2031511_640_wmpdbw.jpg"
        height="100px"
        width="300px"
        showElementt={showLuckyN}
        setShowElementP={setShowLuckyN}
        elementP={<LuckyN winCheck={lessThan4} title="Roll less than 4" />}
        elementP2={<LuckyN winCheck={allSameValue} title="Roll all equal" />}
      ></ReusableButton>
    </div>
  );
}

export default DiceButton;
