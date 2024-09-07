import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

//In the following code, we are setting goal to 7 and that is how you win the game
// function LuckyN({ numDice = 2, goal = 7 }) {
//     const [ dice, setDice ] = useState(getRolls(numDice));
//     const isWinner = sum(dice) === goal;
//     const roll = () => setDice(getRolls(numDice));
//     return (
//         <main className="LuckyN">
//             <h1>Lucky{goal} {isWinner && "You Win!"}</h1>
//             <Dice dice={dice} />
//             <button onClick={roll}>Re-Roll Dice</button>
//         </main>
//     )
// }

//On this second version, instead of setting one single way to win the game, which was whoever gets what 
//the goal number is by summing the dices, now winCheck will be the goal, which can be anything we wanted
//to be, like for example if all the dices have the same number, or 2 dices are bigger than one, etc.
function LuckyN({ title = "Dice Game", numDice = 2, winCheck }) {
    const [ dice, setDice ] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1> 
                {title} {isWinner && "You Win!"}
            </h1>
            <Dice dice={dice} />

            {/* <button onClick={roll}>Re-Roll Dice</button> */}

            {/* Instead of using a simple button and onClick to call the roll function, we define Button 
            component to be reusable as its shown on the code below. And Button is now using the roll
            function   */}
            <Button clickFunc={roll} label="Re-Roll"/>
        </main>
    )
}
export default LuckyN;